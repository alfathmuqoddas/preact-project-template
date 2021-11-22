import { html, useState} from '//unpkg.com/htm/preact/standalone.mjs';

export function TestState() {
	const [count] = useState('Shit');

	return html`
	<div>
		<h1>${count}</h1>
	</div>
	`
}

export const shit = "This is Shit";

export function Bar() {

	return html`
		<div>
			<h1>Bar</h1>
		</div>
	`
}

export default Bar;