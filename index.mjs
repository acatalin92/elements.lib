// import Parser from './core/Parser.mjs';
// # porf native --compiler=gcc .\index.mjs run.exe
// # bun build --compile --minify --sourcemap .\index.mjs --outfile run

const registry = {};

export function attribute() {}

export function unbound() {}

export function on() {}

export function html() {}

export function css() {}

/**
 * @template {new (...args) => any} IData
 * @param {{
 *   tag: String,
 *   data: IData
 * }} configuration 
 * @return {}
 */
export const define = (configuration, implementation) => {
	class Element extends configuration.data {
		constructor() {
			super(...arguments);
		}

		static external2 = 0;
		onCreate() {}
		onLoad() {}
	}

	return Element;
}
