import { Script, attribute } from './lib/index.mjs';
import { external } from '../external.mjs';

export default class extends Script {
	static external = external;

	start = attribute('start', 0);
	clickedAt = attribute('clicked-at', Number);
	clicksCount = this.start;
	isLoaded = false;

	onLoad() {
		this.isLoaded = true;
	}

	handleClick(event) {
		this.clicksCount++;
		sthis.clickedAt = Date.now();
	}
}
