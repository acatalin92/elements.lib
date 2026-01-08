import { attribute, unbound } from './index.mjs';
import { external } from '../external.mjs';

class ClicksCounterData {
	static external = external;

	start = attribute('start');
	clickedAt = attribute('clickedAt');
	clicksCount = unbound(this.start);
	isLoaded = false;

	registerClick() {
		this.clicksCount++;
		this.clickedAt = Date.now();
	}
}

export default ClicksCounterData;
