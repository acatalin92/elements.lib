import { define } from './lib/index.mjs';
import Script from './script.mjs';
import Interface from './interface.mjs';

const ClicksCounter = define({
	tag: 'clicks-counter',
	script: Script,
	interface: Interface,
});

export default ClicksCounter;
