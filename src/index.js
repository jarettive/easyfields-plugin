import UI from './UI/UI';
import Util from './util';
import Form from './UI/Form';

(function () {
	class OpenPayPlugin {
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
			let fields = this.defaultFields;
			if (formOptions && formOptions.fields) {
				fields = Util.mergeDeep(fields, formOptions.fields);
			}

			const form = new Form(fields, formOptions);
			form.renderTo(target);
			return form;
		};

		UI = UI;
	};

	window.OpenPayPlugin = new OpenPayPlugin();
}());