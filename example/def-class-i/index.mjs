// import Parser from './core/Parser.mjs';

export function attribute() {}

export function unbound() {}

export function HTML() {}

export function CSS() {}

/**
 * @template Data
 * @typedef {InstanceType<Data> & Data} TemplateData
 */

/**
 * @template Data
 * @typedef {Object} SElement
 * @property {($: TemplateData<Data>) => void} [template]
 * @property {($: TemplateData<Data>) => void} [style]
 */

/**
 * @template Data
 * @typedef {Object} IElement
 * @property {() => void} [onCreate]
 * @property {() => void} [onLoad]
 */

class IElement {
	/** @type {($: Number) => void} */
	static template;
	/** @type {($: Number) => void} */
	static style;
	onCreate() {}
	onLoad() {}
}

/**
 * @template Data
 * typedef {{ new(): (IElement<Data> & InstanceType<Data>) } & Data} Element
 * typedef {typeof IElement} Element
 * @typedef {{
 *   new (): IElement & InstanceType<Data>;
 *   test: String;
 * }} Element
 */

const registry = {};

export class CustomElement {
	onCreate() {}
	onLoad() {}
}
