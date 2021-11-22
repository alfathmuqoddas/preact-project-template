import { html, render, useState } from '//unpkg.com/htm/preact/standalone.mjs';
import Bar from './src/Bar.js';
import App, { Foo } from './App.js'

function All() {
  return html`
    <div className="container">
      <${App} />
      <${Foo} />
      <${Bar} />
    </div>
  `;
}

render(html`<${All} />`, document.querySelector('#app'));