import { HTML, CSS } from './index.mjs';

export const template = $ => HTML`
<div>
	<p>Import: ${$.external}</p>
	<p>Last clicked at: ${new Date($.clickedAt).toUTCString()}</p>
	<button onClick=${$.handleClick}>
		<span>Clicked ${$.clicksCount} times</span>
	</button>
</div>
`

export const style = $ => CSS`
button {
	font-size: 14px;
}
`
