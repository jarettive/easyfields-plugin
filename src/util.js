class Util {
	static guidGenerator() {
		var S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	}

	static strEquals(a, b) {
		return typeof a === 'string' && typeof b === 'string'
			? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
			: a === b;
	}

	static addStyleSheet(styleString) {
		const el = document.createElement('style');
		el.type = 'text/css';
		const head = document.getElementsByTagName('HEAD')[0];
		el.innerHTML = styleString;
		head.appendChild(el);
	}

	static isObject(item) {
		return (item && typeof item === 'object' && !Array.isArray(item));
	}

	static mergeDeep(target, ...sources) {
		if (!sources.length) return target;
		const source = sources.shift();

		if (Util.isObject(target) && Util.isObject(source)) {
			for (const key in source) {
				if (Util.isObject(source[key])) {
					if (!target[key]) Object.assign(target, { [key]: {} });
					this.mergeDeep(target[key], source[key]);
				} else {
					Object.assign(target, { [key]: source[key] });
				}
			}
		}
		return this.mergeDeep(target, ...sources);
	}
}

export default Util;

