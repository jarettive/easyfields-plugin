Vue.component('testing-options', Vue.extend({
	template:
		`<div id="testingOptions">
			<h1>Testing Options</h1>
			<p>
				Transaction type:
				<select id="transactionType">
					<option v-for="type in transactionTypes" v-bind:value="type">{{type}}</option>
				</select>
			</p>
			<p>
				Environment:
				<select id="transactionType">
					<option v-for="type in transactionTypes" v-bind:value="type">{{type}}</option>
				</select>
			</p>
			<p>
				Button Text:
				<input>
			</p>
		</div>`,

	data: function () {
		return {
			transactionTypes: ['ssf', 'sd;lfk']
		}
	}
}));

new Vue({
	el: '#main',
});

console.log("zoo wee mama");