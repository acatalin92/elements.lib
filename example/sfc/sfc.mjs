import { define, attribute, unbound, on, html, css } from '../../index.mjs';
import { external } from '../external.mjs';

define({
	tag: 'clicks-counter',
	extends: HTMLDivElement,
	imports: { external },
}, () => {
	let start = attribute('start', Number);
	let clickedAt = attribute('clicked-at', Number);
	let clicksCount = unbound(start);
	let isLoaded = false;

	function handleClick(event) {
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

	css`
	button {
		font-size: 14px;
	}
	`
});
