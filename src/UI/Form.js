import React from 'react';
import defaultcss from './Form.css';
import IFrameField from './IFrameField';
import Util from '../util';
import ReactDOM from 'react-dom';

class Form extends React.Component {
	static defaultProps = { defaultStyle: true }

	fieldRefs = [];

	constructor(props) {
		super(props);
		if (this.props.defaultStyle) {
			Util.addStyleSheet(defaultcss);
		}
	}

	render() {
		const props = this.props;
		return (
			<div className='openedge-form' >
				{
					Object.keys(props.fields).map((key) => {
						const field = props.fields[key];
						const target = field.target;
						if (!target) {
							return this.createIFrameField(field, key);
						}
					})
				}
			</div>
		);
	}

	componentDidMount() {
		var self = this;
		self.unregisteredFields = Array.from(self.props.fields, x => x.name.replace(/\s/g, ''));
		window.addEventListener('message', this.windowMsgHandler, false);
		this.addIframeFields();
	}


	windowMsgHandler = (event) => {
		const fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');

		switch (fieldEventType) {
			case 'register':
				this.unregisteredFields = this.unregisteredFields.filter(item => item !== event.data);
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

	createIFrameField(field, key) {
		const frameField = <IFrameField
			{...field}
			ref={(c) => { this.fieldRefs.push(c) }}
			name={key}
			key={key}
			defaultStyle={this.props.defaultStyle}
		></IFrameField>
		return frameField;
	}

	addIframeFields() {
		const props = this.props;
		Object.keys(props.fields).map((key) => {
			const field = props.fields[key];
			const iFrameField = this.createIFrameField(field, key);
			const target = field.target;
			if (target) {
				let el = '';
				if (typeof target === 'string') {
					el = document.querySelector(target);
					if (!el) {
						throw new Error('Field target does not exist');
					}
				}
				ReactDOM.render(iFrameField, el)
			}
		})
	}

	requestDataFromFields() {
		var fieldTypes = Object.keys(this.props.fields);

		for (var field of this.fieldRefs) {
			field.requestFieldData({ fieldTypes });
		}
	}

	passData(fieldData) {
		const targetField = this.fieldRefs.find((iFrameField) => {
			return iFrameField.props.name === 'card-number';
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