import { CustomElement, attribute, unbound, HTML, CSS } from './index.mjs';
import { external } from '../external.mjs';

class ClicksCounter extends CustomElement {
	static external = external;

	start = attribute('start');
	clickedAt = attribute('clickedAt');
	clicksCount = unbound(this.start);
	isLoaded = false;

	handleClick() {
		this.clicksCount++;
		this.clickedAt = Date.now();
	}
}

template.HTML = $ => HTML`
<div>
	<p>Import: ${$.external}</p>
	<p>Last clicked at: ${new Date($.clickedAt).toUTCString()}</p>
	<button onClick=${$.handleClick}>
		<span>Clicked ${$.clicksCount} times</span>
	</button>
</div>
`

template.CSS = $ => CSS`
button {
	font-size: 14px;
}
`

export default ClicksCounter;
