import { define, HTML, CSS } from './index.mjs';
import ClicksCounterData from './ClicksCounterData.mjs';

const [ClicksCounter, { template }] = define({
	tag: 'clicks-counter',
	data: ClicksCounterData,
}, {
	onCreate() {
		this.isLoaded;
	},
	handleClick() {},
});

template.HTML = $ => HTML`
<div>
	<p>Import: ${$.external}</p>
	<p>Last clicked at: ${new Date($.clickedAt).toUTCString()}</p>
	<button onClick=${$.handleClick}>
		<span>Clicked ${$.clicksCount} times</span>
	</button>
<div>
`

template.CSS = $ => CSS`
button {
	font-size: 14px;
}
`

export default ClicksCounter;
