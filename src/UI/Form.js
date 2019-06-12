import defaultcss from './Form.css';
import IFrameField from './IFrameField';
import Util from '../util';

class Form {
	iFrameFields = [];

	constructor(fields, formOptions) {
		formOptions = formOptions || {};
		this.fields = fields;
		if (formOptions.defaultStyle !== false) {
			Util.addStyleSheet(defaultcss);
		}
	}

	renderTo(target) {
		const fields = this.fields;
		const el = document.createElement('div');
		el.classList.add("openedge-form");
		Object.keys(fields).map((type) => {
			const fieldData = fields[type];
			const target = fieldData.target;
			const iframeField = new IFrameField(type, fieldData);
			iframeField.renderTo(target || el);
			this.iFrameFields.push(iframeField);
		});
		target.appendChild(el);

		// self.unregisteredFields = Array.from(self.props.fields, x => x.name.replace(/\s/g, ''));
		window.addEventListener('message', this.windowMsgHandler, false);
	}

	windowMsgHandler = (event) => {
		const fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');

		switch (fieldEventType) {
			case 'register':
				// this.unregisteredFields = this.unregisteredFields.filter(item => item !== event.data);
				break;
			case 'submitClick':
				this.requestDataFromFields();
				break;
			case 'passData':
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
		targetField.iframe.contentWindow.postMessage(
			{
				name: fieldData.name,
				value: fieldData.value,
				type: IFrameField.eventID + 'accumulateData'
			},
			IFrameField.fieldURL
		)
	}

}

export default Form;