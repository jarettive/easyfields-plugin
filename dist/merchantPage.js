Vue.component('merchant-page', Vue.extend({

	template:
		`<div id="merchantPage">
			<h1>{{name}}</h1>
			<div id="merchantBody">
				<div id="fieldsContainer">
					<div v-for="field in fields" v-bind:id="field">
						<div class="fieldSpace"></div>
					</div>
					<div id="OpenPayForm"></div>
				</div>
				<testing-options></testing-options>
			</div>
		</div>`,
	data: function () {
		return {
			name: 'Jarett\'s Shop',
			fields: ['card-number', 'card-cvv', 'card-expiration', 'submit']
		};
	},

	methods: {

	}
}));