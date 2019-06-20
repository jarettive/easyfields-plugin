class Util {
	static guidGenerator() {
		var S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
	}

	static strEquals(a, b) {
		return typeof a === 'string' && typeof b === 'string'
			? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
			: a === b;
	}

	static encodeEntities(value) {
		if (value) {
			return value
				.replace(/&/g, '&amp;').replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, (v) => {
					const hi = v.charCodeAt(0);
					const low = v.charCodeAt(1);
					return '&#' + ((hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000) + ';';
				}).replace(/([^\#-~| |!])/g, (v) => {
					return '&#' + v.charCodeAt(0) + ';';
				}).replace(/</g, '&lt;').replace(/>/g, '&gt;');
		}
	}

	static addStyleSheet(css) {
		const el = document.createElement('style');
		el.type = 'text/css';

		if (el.styleSheet) {
			// for IE
			el.styleSheet.cssText = css;
		}
		else {
			el.appendChild(document.createTextNode(css));
		}

		const elements = document.getElementsByTagName('HEAD');
		if (elements && elements[0]) {
			elements[0].appendChild(el);
		}
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
				}
				else {
					Object.assign(target, { [key]: source[key] });
				}
			}
		}
		return this.mergeDeep(target, ...sources);
	}
}

export default Util;

