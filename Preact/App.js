import { html, render, useState } from '//unpkg.com/htm/preact/standalone.mjs';
import Bar from './src/Bar.js';

export default function App() {
	return html`
	  <div className="container">
      <h1 className="text-center my-5">This is preact without nodejs</h1>
      <${Foo} />
      <${Bar} />
    </div>
	`;
}

export function Foo() {
  const [count, setCount] = useState(0);

  return html`
    <div>
      <h4>Preact useState hooks</h4>
      <button className="btn btn-primary" onClick=${() => setCount(count + 1)}>you click ${count}</button>
    </div>
  `
}
