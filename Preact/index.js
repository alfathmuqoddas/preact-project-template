import { html, render, useState } from '//unpkg.com/htm/preact/standalone.mjs';
import App from './App.js'

render(html`<${App} />`, document.querySelector('#app'));