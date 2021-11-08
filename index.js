import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js';
import { Za, Foo } from './src/App.js';

const Bar = () => {
	return html`
		<${Za} />
		<${Foo} />
	`;
}

render(html`<${Bar} />`, document.body);