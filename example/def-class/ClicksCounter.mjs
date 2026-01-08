import { Elements, HTML, CSS } from './index.mjs';
import ClicksCounterData from './ClicksCounterData.mjs';

class ClicksCounter extends Elements.define({
	tag: 'clicks-counter',
	data: ClicksCounterData,
}) {
	static template = $ => HTML`
	<div>
		<p>Import: ${$.external}</p>
		<p>Last clicked at: ${new Date($.clickedAt).toUTCString()}</p>
		<button onClick=${$.handleClick}>
			<span>Clicked ${$.clicksCount} times</span>
		</button>
	<div>
	`

	static style = $ => CSS`
	button {
		font-size: 14px;
	}
	`

	onCreate() {
		ClicksCounter.external;
		this.clickedAt;
	}
}

export default ClicksCounter;
