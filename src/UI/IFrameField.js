import Util from '../util';
import defaultcss from './field.css';

class IFrameField {
	static eventID = 'openedge:field:';
	static paymentFieldID = 'openedge-payment-field';
	static fieldURL = 'http://127.0.0.1:5501/field.html';
	// static fieldURL = 'http://htmlpreview.github.io/?https://raw.githubusercontent.com/jarettive/easyfields-plugin/master/dist/field.html';

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
			while (target.firstChild) {
				target.removeChild(target.firstChild);
			}
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
		iframe.scrolling = 'no';
		iframe.setAttribute('allowtransparency', 'true');
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
		const data = event.data;
		const self = this;
		if (!data.id || (data.id !== self.id)) {
			return;
		}

		const fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');

		if (fieldEventType === 'register') {
			self.onRegister();
		}
		if (fieldEventType === 'resize') {
			self.iframe.style.height = data.height + 'px';
		}
	}

	onRegister() {
		this.postToChild(Object.assign({}, this.data), 'initializePaymentField');
		// this.emit('register');
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

	static initializePaymentField(fieldAttrs) {
		const field = document.getElementById(IFrameField.paymentFieldID);
		IFrameField.setPlaceholder(field, fieldAttrs.placeholder);
		field.setAttribute('value', Util.encodeEntities(fieldAttrs.value) || '');
		if (IFrameField.data.name === 'submit') {
			field.textContent = Util.encodeEntities(fieldAttrs.value);
		}

		fieldAttrs.style && Util.addStyleSheet(fieldAttrs.style);
		Util.addStyleSheet((!fieldAttrs.defaultStyle && defaultcss));
		IFrameField.triggerResize();
	}

	static setPlaceholder(field, placeholder) {
		placeholder = placeholder || '';

		for (const ch of placeholder) {
			if (ch !== '·' &&
				ch !== '•' &&
				ch !== '*' &&
				ch !== ' ') {
				placeholder = Util.encodeEntities(placeholder);
				break;
			}
		}
		field.setAttribute('placeholder', placeholder);
	}

	//Tell the parent window the height of this window's content so it can resize the iframe appropriately
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
				{
					name: iframeData.name,
					id: IFrameField.data.id
				},
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

		if (IFrameField.isAccumulator(window)) {
			window.fieldTypes = queryData.fieldTypes;
			window.receivedFields = window.receivedFields || {};
			window.receivedFields['card-number'] = value;
		}
		else {
			IFrameField.passToAccumulatorWindow(value);
		}
	}

	static isAccumulator(window) {
		return (window.name === 'card-number');
	}

	// One of the windows -- in this case the 'card-number' window -- is the accumulator. This method finds that accumulator window and passes
	// the value from this window's input field to it.
	static passToAccumulatorWindow(value) {
		for (var i = 0; i < window.parent.frames.length; i++) {
			var siblingWindow = window.parent.frames[i];
			if (IFrameField.isAccumulator(siblingWindow)) {
				siblingWindow.postMessage(
					{
						name: window.name,
						value: value,
						type: IFrameField.eventID + 'accumulateData'
					}
					, IFrameField.fieldURL);
			}
		}
	}

	//Receive field data from another window into the card-number/account-number window. Once all other field data
	//is accumulated it will be tokenized and the token will be returned to the parent window 
	static accumulateData(data) {
		window.receivedFields = window.receivedFields || {};
		window.receivedFields[data.name] = data.value;

		window.fieldTypes = window.fieldTypes || {};

		const receivedTypes = Object.keys(window.receivedFields);

		if (JSON.stringify(receivedTypes.sort()) ===
			JSON.stringify(window.fieldTypes.sort())) {
			console.dir(window.receivedFields);

			// TODO: Implement tokenization here 

			// TODO: Trigger a 'token-success' event for the Form to catch 

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