import UI from './UI/UI';
import Util from './util';
import Form from './UI/Form';

(function () {
	class OpenEdgePlugin {

		defaultFields = {
			"card-holder-name": {
				placeholder: "John Doe",
				label: "Card Holder Name",
			},
			"card-number": {
				placeholder: "•••• •••• •••• ••••",
				label: "Card Number",
			},
			"card-expiration": {
				placeholder: "MM / YYYY",
				label: "Card Expiration",
			},
			"card-cvv": {
				placeholder: "•••",
				label: "Card Cvv"
			},
			"submit": {
				value: "Submit",
			}
		};

		makeForm = function (target, formOptions) {
			if (typeof target === "string") {
				const el = document.querySelector(target);
				if (!el) {
					throw new Error("Form target does not exist");
				}
				target = el;
			}

			const fields = this.configureFormFields(target, formOptions);

			const form = new Form(fields, formOptions);
			form.render(target);
			return form;
		};

		configureFormFields(target, formOptions) {
			let fields = this.defaultFields;

			if (formOptions && formOptions.fields) {
				if (target) {
					fields = Util.mergeDeep(fields, formOptions.fields);
				}
				else {
					fields = formOptions.fields;
					var fieldTypes = Object.keys(fields);
					for (var type of fieldTypes) {
						fields[type] = Util.mergeDeep(this.defaultFields[type], fields[type]);
					}
				}
			}
			return fields;
		}

		UI = UI;
	};

	window.OpenEdgePlugin = new OpenEdgePlugin();
}());