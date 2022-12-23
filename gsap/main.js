import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { gsapConfig } from './gsap_config.js'

document.querySelector('#app').innerHTML = `
	<div class="list-1">
		<div class="square"></div>
	</div>
	<div class="list-2">
		<div class="square"></div>
	</div>
	<div class="list-3">
		<div class="square"></div>
	</div>
	<div class="list-4">
		<div class="square"></div>
	</div>

  <div>
	<a href="https://vitejs.dev" target="_blank">
	  <img src="/vite.svg" class="logo" alt="Vite logo" />
	</a>
	<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
	  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
	</a>
	<h1>わんわん</h1>
	<div class="card">
	  <button id="counter" type="button"></button>
	</div>
	<p class="read-the-docs">
	  Click on the Vite logo to learn more
	</p>
  </div>
`
gsapConfig( document.querySelector( '#app' ) )
setupCounter(document.querySelector('#counter'))

