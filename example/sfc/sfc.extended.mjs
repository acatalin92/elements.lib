import { define, attribute, on, HTML, CSS } from './lib/index.mjs';
import { external } from '../external.mjs';

export default define({
	tag: 'clicks-counter',
	imports: { external },
}, () => {
	let start = attribute('start', 0);
	let clickedAt = attribute('clicked-at', Number);
	let clicksCount = start;
	let isLoaded = false;

	function handleClick() {
		clicksCount++;
		clickedAt = Date.now();
	}

	on('load', (event) => {
		isLoaded = true;
	});

	HTML`
	<div>
		<p>Import: ${external}</p>
		<p>Last clicked at: ${new Date(clickedAt).toUTCString()}</p>
		<button onClick=${handleClick}>
			<span>Clicked ${clicksCount} times</span>
		</button>
	</div>
	`

	CSS`
	button {
		font-size: 14px;
	}
	`
});
