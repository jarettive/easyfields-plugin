import Util from '../util';
import defaultcss from './field.css';

class IFrameField {
	static eventID = 'openedge:field:';
	static paymentFieldID = 'openedge-payment-field';
	static fieldURL = 'http://127.0.0.1:5501/field.html';

	constructor(name, data) {
		this.data = data;
		this.name = name;
		this.id = btoa(Util.guidGenerator());
		window.addEventListener('message', this.handleEventFromChild, false);
	}

	render(target) {
		if (typeof target === 'string') {
			target = document.querySelector(target);
		}

		const el = this.createMainElement();

		if (target instanceof HTMLElement) {
			target.appendChild(el);
		}
	}

	createMainElement() {
		const el = document.createElement('div');

		const name = this.name.replace(/\s/g, '');
		el.id = 'openedge-' + name;
		el.classList.add('openedge-field');

		const label = this.createLabelElement();
		if (label) {
			el.appendChild(label);
		}
		this.iframe = this.createIFrameElement(name);
		el.appendChild(this.iframe);
		return el;
	}

	createLabelElement() {
		let label = null;
		if (this.data.label) {
			label = document.createElement('label');
			label.innerText = this.data.label;
		}
		return label;
	}

	createIFrameElement(name) {
		const iframe = document.createElement('iframe');
		const src = IFrameField.fieldURL + '#' + btoa(
			JSON.stringify({
				originURL: window.location.href,
				id: this.id,
				name,
			}));
		iframe.name = name;
		iframe.src = src;
		return iframe;
	}

	postToChild(data, eventType) {
		const type = IFrameField.eventID + eventType;
		data.type = type;
		this.iframe.contentWindow.postMessage(
			data,
			IFrameField.fieldURL
		);
	}

	requestFieldData(queryData) {
		this.postToChild(queryData, 'requestData');
	}

	handleEventFromChild = (event) => {
		const self = this;
		const fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');
		if (event.data.id === self.id) {
			if (fieldEventType === 'register') {
				self.onRegister();
			}
			if (fieldEventType === 'resize') {
				self.iframe.style.height = event.data.height + 'px';
			}
		}
	}

	onRegister() {
		this.postToChild(Object.assign({}, this.data), 'initializePaymentField');
		// this.emit('register');
	}

	passData(fieldData) {
		this.iframe.contentWindow.postMessage(
			{
				name: fieldData.name,
				value: fieldData.value,
				type: IFrameField.eventID + 'accumulateData'
			},
			IFrameField.fieldURL
		)
	}

	static register(name) {
		const query = window.location.hash.replace('#', '');
		const iframeData = JSON.parse(atob(query));
		iframeData.name = name;
		IFrameField.data = iframeData;

		//Create and render the input field
		IFrameField.createField(iframeData);
		window.addEventListener('message', this.handleEventFromParent, false);
		IFrameField.postToParent(
			{ name, id: iframeData.id },
			'register'
		);
	}

	static initializePaymentField(data) {
		const field = document.getElementById(IFrameField.paymentFieldID);
		field.setAttribute('placeholder', data.placeholder || '');
		field.setAttribute('value', data.value || '');
		if (IFrameField.data.name === 'submit') {
			field.innerHTML = data.value;
		}
		Util.addStyleSheet(data.style || (!data.defaultStyle && defaultcss) || '');
		IFrameField.triggerResize();
	}

	//Tell the parent the height of the window content so it can resize the iframe appropriately
	static triggerResize() {
		IFrameField.postToParent(
			{
				name,
				id: IFrameField.data.id,
				height: document.body.scrollHeight + 1
			},
			'resize'
		);
	}

	static createField(iframeData) {
		var isSubmit = Util.strEquals(iframeData.name, 'submit');
		this.input = isSubmit ? IFrameField.createButton(iframeData) : document.createElement('input');
		this.input.id = this.paymentFieldID;
		this.input.name = iframeData.name;
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(this.input);
	}

	static createButton(iframeData) {
		const button = document.createElement('button');
		button.addEventListener('click', function () {
			IFrameField.postToParent(
				{ name: iframeData.name },
				'submitClick'
			);
		});
		return button;
	}

	static handleEventFromParent(event) {
		const fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');
		const eventFunc = IFrameField[fieldEventType];
		if (typeof eventFunc == 'function') {
			eventFunc(event.data);
		}
	}

	static requestData(queryData) {
		const field = document.getElementById(IFrameField.paymentFieldID);
		let value = field && field.value ? field.value : '';
		if (IFrameField.data.name === 'card-number') {
			value = '';
			window.fieldTypes = queryData.fieldTypes;
		}
		IFrameField.postToParent(
			{
				name: window.name,
				value: value
			},
			'returnRequestedData'
		)
	}

	//Receive field data from another window into the card-number/account-number window. Once all other field data
	//is accumulated it will be tokenized and the token will be returned to the parent window 
	static accumulateData(data) {
		window.receivedFields = window.receivedFields || {};
		window.receivedFields[data.name] = data.value;
		const receivedTypes = Object.keys(receivedFields);
		if (JSON.stringify(receivedTypes.sort()) ===
			JSON.stringify(window.fieldTypes.sort())) {
			console.dir(window.receivedFields);
			window.receivedFields = {};
		}
	}

	static postToParent(data, eventType) {
		const type = IFrameField.eventID + eventType;
		data.type = type;
		window.parent.postMessage(
			data,
			IFrameField.data.originURL);
	}
}

export default IFrameField;