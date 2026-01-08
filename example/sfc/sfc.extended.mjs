import { define, attribute, unbound, on, html, css } from '../../index.mjs';
import { external } from '../external.mjs';

const ClicksCounter = define({
	tag: 'clicks-counter',
	imports: { external },
}, () => {
	let start = attribute('start', Number);
	let clickedAt = attribute('clicked-at', Number);
	let clicksCount = unbound(start);
	let isLoaded = false;

	function registerClick() {
		clicksCount++;
		clickedAt = Date.now();
	}

	on('load', (event) => {
		isLoaded = true;
	});

	html`
	<div>
		<p>Import: ${external}</p>
		<p>Last clicked at: ${new Date(clickedAt).toUTCString()}</p>
		<button onClick=${handleClick}>
			<span>Clicked ${clicksCount} times</span>
		</button>
	<div>
	`

	function handleClick(event) {
		animate(event);
		registerClick();
	}

	function animate(event) {}

	css`
	button {
		font-size: 14px;
	}
	`
});

export default ClicksCounter;
