import Util from '../util';
import defaultcss from './field.css';

class IFrameField {
	static eventID = 'openedge:field:';
	static paymentFieldID = 'openedge-payment-field';
	static fieldURL = 'http://127.0.0.1:5501/field.html';

	constructor(name, data) {
		this.data = data;
		this.name = name;
		this.attachOriginWindowListener();
		this.id = btoa(Util.guidGenerator());
	}

	renderTo(target) {
		if (typeof target === 'string') {
			target = document.querySelector(target);
		}
		const el = document.createElement('div');

		const name = this.name.replace(/\s/g, '');
		el.id = 'openedge-' + name;
		el.classList.add('openedge-field');

		this.iframe = this.createIFrameElement(name)
		el.appendChild(this.iframe);

		if (target instanceof HTMLElement) {
			target.appendChild(el);
		}
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

	render() {
		return (
			<div id={'openedge-' + name} className='openedge-field'>
				{props.label && <label>{props.label}</label>}
				<iframe ref={(el) => { this.iframe = el; }} title={name} name={name} src={src}></iframe>
			</div>
		)
	}

	postToChild(data, eventType) {
		const type = IFrameField.eventID + eventType;
		data.type = type;
		this.iframe.contentWindow.postMessage(
			data,
			'*'// TODO: change this to the location that field.html will be hosted at
		);
	}

	requestFieldData(queryData) {
		this.postToChild(queryData, 'requestData');
	}

	attachOriginWindowListener() {
		const self = this;
		window.addEventListener('message', function (event) {
			const fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');
			if (event.data.id === self.id) {
				if (fieldEventType === 'register') {
					self.onRegister();
				}
				if (fieldEventType === 'resize') {
					self.iframe.style.height = event.data.height + 'px';
				}
			}
		}, false);
	}

	onRegister() {
		this.postToChild(this.data, 'setUpPaymentField');
	}

	static register(name) {
		var self = IFrameField;
		const query = window.location.hash.replace('#', '');
		const iframeData = JSON.parse(atob(query));
		iframeData.name = name;
		IFrameField.data = iframeData;

		//Create and render the input field
		self.createField(iframeData);

		window.addEventListener('message', this.handleChildWindowEvent, false);
		IFrameField.postToParent(
			{ name, id: iframeData.id },
			'register'
		);
	}

	static setUpPaymentField(data) {
		const field = document.getElementById(IFrameField.paymentFieldID);
		field.setAttribute('placeholder', data.placeholder || '');
		field.setAttribute('value', data.value || '');
		Util.addStyleSheet(data.style || (!data.defaultStyle && defaultcss) || '');
		IFrameField.triggerResize();
	}

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
		this.input = isSubmit ? IFrameField.createButton(iframeData) : IFrameField.createInput(iframeData);
		this.input.id = this.paymentFieldID;
		this.input.name = iframeData.name;
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(this.input);
	}

	static createButton(iframeData) {
		const button = document.createElement('button');
		button.appendChild(document.createTextNode('Submit'));
		button.addEventListener('click', function () {
			IFrameField.postToParent(
				{ name: iframeData.name },
				'submitClick'
			);
		});
		return button;
	}

	static createInput() {
		return document.createElement('input');
	}

	static handleChildWindowEvent(event) {
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
			'passData'
		)
	}

	//This is the method for receiving data in the card-number/account-number window. Once the data from all the other windows 
	// is accumulated it will be tokenized and the token will be returned to the parent window 
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