// import Parser from './core/Parser.mjs';
// # porf native --compiler=gcc .\index.mjs run.exe
// # bun build --compile --minify --sourcemap .\index.mjs --outfile run

const registry = {};

export function attribute() {}

export function unbound() {}

export function on() {}

export function HTML() {}

export function CSS() {}

/**
 * @template Data
 * @typedef {InstanceType<Data> & Data} TemplateData
 */

/**
 * @template Data
 * @typedef {Object} ImplementationBase
 * @property {() => void} [onCreate]
 * @property {() => void} [onLoad]
 * @property {($: TemplateData<Data>) => void} [template]
 * @property {($: TemplateData<Data>) => void} [style]
 */

/**
 * @template Data
 * @typedef {ImplementationBase<Data> & InstanceType<Data> & Data} Implementation
 */

/**
 * @typedef {{ new(): HTMLElement }} Element
 */

/**
 * @template Data
 * @typedef {Object} Renderer
 * @property {{ html: ($: Data) => void }} template
 */

/**
 * @template Data
 * @param {{ tag: String, data: Data }} configuration 
 * @param {Implementation<Data>} implementation 
 * @return {[Element, Renderer<Implementation<Data>>]}
 */
export function define(configuration, implementation) {
	//
}
