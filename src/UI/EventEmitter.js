class EventEmitter {
	constructor() {
		this.events = {};
	}

	emit = (event, ...args) => {
		const listeners = this.events[event];
		if (Array.isArray(listeners)) {
			for (var i = 0; i < listeners.length; i++) {
				listeners[i].apply(this, args);
			}
		}
	}

	on = (event, listener) => {
		if (typeof this.events[event] !== 'object') {
			this.events[event] = [];
		}
		this.events[event].push(listener);
	}

	off = (event, listener) => {
		if (listener == undefined) {
			delete this.events[event];
		}
		else {
			const listeners = this.events[event];
			if (typeof listeners === 'object') {
				let idx = listeners.indexOf(listener);
				if (idx >= 0) {
					listeners.splice(idx, 1);
				}
			}
		}
	}
}
export default EventEmitter;