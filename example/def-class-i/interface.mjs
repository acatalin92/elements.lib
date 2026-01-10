import { Interface, HTML, CSS } from './lib/index.mjs';

/** @type {Interface.Setter<import('./script.mjs')>} */
const template = $ => HTML`
<div>
	<p>Import: ${$.external}</p>
	<p>Last clicked at: ${new Date($.clickedAt).toUTCString()}</p>
	<button onClick=${$.handleClick}>
		<span>Clicked ${$.clicksCount} times</span>
	</button>
</div>
`

const style = $ => CSS`
button {
	font-size: 14px;
}
`

class Press extends Animation {
}

export default class extends Interface {
	static template = template;
	static style = style;
	animations = {};
}
