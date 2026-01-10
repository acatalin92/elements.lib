// # porf native --compiler=gcc .\index.mjs run.exe
// # bun build --compile --minify --sourcemap .\index.mjs --outfile run


/*
 * @template T
 * @typedef {new(...args: any[]) => T} Constructor
 */

/*
 * @typedef {Object} TestClass
 * @property {($: number) => void} html
 */

/*
 * @template T
 * @typedef {Object} ITemplate
 * @property {($: new() => T) => void} html
 * @property {($: new() => T) => void} css
 */

/*
 * @template D
 * @param {D} def
 * @returns {ITemplate<D>}
 */
// function Template(def) {}

// class Test {}

// const template = Template(Test);

// template.html = $ => {}




/* 
 * @template IDefinition
 * @param {IDefinition} def
 * @returns {{
 *   html: ($: new() => IDefinition) => void,
 *   css: ($: new() => IDefinition) => void
 * }}
 */
// export const t = (def) => {};




$ => html`
<div>
    <p>Import: ${$.external}</p>
    <p>Last clicked at: ${new Date($.clickedAt).toUTCString()}</p>
    <button onClick=${$.handleClick}>
        <span>Clicked ${$.clicksCount} times</span>
    </button>
<div>
`

$ => css`
button {
    font-size: 14px;
}
`


class CImplementation {
	static test_static = 1;
	test = 1;
}

/**
 * param {{ new(...args): CImplementation }} p 
 * @param {CImplementation} p
 */
function get_class_param(p) {}

get_class_param(class {

});




const getCustomElementClass = () => class {
	static observedAttributes = [];

	constructor() {
		console.log("Custom element created.");
	}

	connectedCallback() {
		console.log("Custom element added to page.");
	}

	disconnectedCallback() {}

	connectedMoveCallback() {}

	adoptedCallback() {}

	attributeChangedCallback(name, previous, current) {
		console.log(`Attribute ${name} was changed.`);
	}
};


























/**
 * @typedef {Object} ImplementationBase
 * @property {() => void} [onCreate]
 * @property {() => void} [onLoad]
 */

/**
 * @template Data
 * @typedef {ImplementationBase & InstanceType<Data> & Data} Implementation
 */

/**
 * @typedef {HTMLElement} Element
 */

/**
 * @template Data
 * @param {{ tag: String, data: Data }} configuration 
 * @param {Implementation<Data>} implementation 
 * @return {{ class: Element, template: Object }}
 */
function define(configuration, implementation) {}


class ClicksCounterData {
    static external = 123456789;

    start = attribute('start');
    clickedAt = attribute('clickedAt');
    clicksCount = unbound(this.start);
    isLoaded = false;

    registerClick() {
        this.clicksCount++;
        this.clickedAt = Date.now();
    }
}

const { class: ClicksCounter, template } = define({
    tag: 'clicks-counter',
    data: ClicksCounterData,
}, {
    onCreate() {
        this.isLoaded;
    }
});





























class Component {
    onCreate() {}
    onLoad() {}
}

class CustomElement extends Component {

}
