import { html, render, useState } from '//unpkg.com/htm/preact/standalone.mjs';

export default function App() {
	return html`
	  <div>
      <h1 className="text-center">This is preact</h1>
      <${Foo} />
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
