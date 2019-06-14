import defaultcss from './Form.css';
import IFrameField from './IFrameField';
import Util from '../util';
import EventEmitter from "./EventEmitter";

class Form extends EventEmitter {
	iFrameFields = [];

	constructor(fields, formOptions) {
		super();
		formOptions = formOptions || {};
		this.fields = fields;
		if (formOptions.defaultStyle !== false) {
			Util.addStyleSheet(defaultcss);
		}
		this.unregisteredFields = Object.keys(this.fields);
		window.addEventListener('message', this.windowMsgHandler, false);
	}

	render(target) {
		const el = this.createMainElement();

		if (target instanceof HTMLElement) {
			target.appendChild(el);
		}
	}

	createMainElement() {
		const el = document.createElement('div');
		el.classList.add("openedge-form");

		const fields = this.fields;
		Object.keys(fields).map((name) => {
			const fieldData = fields[name];
			const iframeField = new IFrameField(name, fieldData);
			iframeField.render(fieldData.target || el);
			this.iFrameFields.push(iframeField);
		});

		return el;
	}

	windowMsgHandler = (event) => {
		const fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');

		switch (fieldEventType) {
			case 'register':
				this.unregisteredFields = this.unregisteredFields.filter(item => item !== event.data.name);
				if (this.unregisteredFields === undefined || this.unregisteredFields.length === 0) {
					this.emit('ready');
				}
				break;
			case 'submitClick':
				this.requestDataFromFields();
				break;
			case 'returnRequestedData':
				this.passData(event.data);
			default:
				break;
		}
	}

	requestDataFromFields() {
		var fieldTypes = Object.keys(this.fields);
		for (var field of this.iFrameFields) {
			field.requestFieldData({ fieldTypes });
		}
	}

	passData(fieldData) {
		const targetField = this.iFrameFields.find((iFrameField) => {
			return iFrameField.name === 'card-number';
		});
		targetField.passData(fieldData);
	}

}

export default Form;