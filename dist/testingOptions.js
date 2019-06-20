Vue.component('testing-options', Vue.extend({

	template:
		`<div id="testingOptions">
			<h1>Testing Options</h1>
			<p>
				Transaction type:
				<select v-model="currentTransaction" v-on:change="changeTransaction" id="transactionType">
					<option v-for="type in transactionTypes" v-bind:value="type">{{type}}</option>
				</select>
			</p>
			<p>
				Environment:
				<select v-model="currentEnv" v-on:change="changeEnv" id="envType">
					<option v-for="type in envTypes" v-bind:value="type">{{type}}</option>
				</select>
			</p>
			<p>
				Button Text:
				<input>
			</p>
			<testing-log v-bind:logType="'Submission Log'"></testing-log>
			<testing-log v-bind:logType="'Response Log'"></testing-log>
		</div>`,

	data: function () {
		return {
			transactionTypes: ['ssf', 'sd;lfk'],
			envTypes: ['Production', 'Dev1', 'Dev2'],
			currentEnv: 'Production',
			currentTransaction: ''
		};
	},

	methods: {
		changeEnv: function () {
			console.log('Changing environment type');
		},

		changeTransaction: function () {
			console.log('Changing transaction type');
		}
	}
}));

Vue.component('testing-log', Vue.extend({
	template:
		`<div class="testingLog">
			<div class="logHeader" 
				v-bind:class="{collapsed : collapsed}"
				v-on:click="collapsed = !collapsed">
				{{logType}}
			</div>
			<div class="logContainer">
				<div class="logText">
					{{logString}}
				</div>
			</div>
		</div>`,
	props: ['logType'],
	data: function () {
		return {
			logString: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			collapsed: true,
		};
	},

	methods: {}
}));

var testPageVue = new Vue({
	el: '#main',
});

console.stdlog = console.log.bind(console);
console.log = function () {
	console.stdlog.apply(console, arguments);
}
console.stderror = console.error.bind(console);
console.error = function () {
	console.stderror.apply(console, arguments);
}
