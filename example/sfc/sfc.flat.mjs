import { HTML, CSS } from './lib/index.mjs';
import { external } from '../external.mjs';

class ClicksCounter extends Component {
	static external = external;

	start = 0;
	clicksCount = 0;
	clickedAt = null;
	isLoaded = false;

	Template = HTML`
	<p>Import: ${ClicksCounter.external}</p>
	<p>Last clicked at: ${new Date(this.clickedAt).toUTCString()}</p>
	<button onClick=${this.handleClick}>
		<span>Clicked ${this.clicksCount} times</span>
	</button>
	`

	Style = CSS`
	button {
		font-size: 14px;
	}
	`

	handleClick() {
		this.clicksCount++;
		this.clickedAt = Date.now();
	}

	onLoad() {
		this.isLoaded = true;
	}
}

export default ClicksCounter;
