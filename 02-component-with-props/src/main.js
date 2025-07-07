/* -------------------------------------------------------------------------- */
/*                           Class Syntax this.Props                          */
/* -------------------------------------------------------------------------- */

import React, { createElement as h } from './lib/react.js';
import ReactDOM from './lib/react-dom.js';
import { PlanetPage } from './pages/PlanetPage.js';
import { _PlanetPage } from './pages/_PlanetPage.js';
import { AvatarPage } from './pages/AvatarPage.js';


/* Planet Banner Rendering */
/* using class syntax */

// 1. PlanetItem => li => 'components/planet/PlanetItem.js';
// 2. PlanetList => ul (children은 virtualDOM을 담은 배열로 전달) => '/components/planet/PlanetList.js';
// 3. PlanetPage => rendering target => '/pages/PlanetPage.js';

// const container = document.getElementById('app');
// if (container) { 
//   const reactDomRoot = ReactDOM.createRoot(container);
//   // reactDomRoot.render(h(PlanetPage));
// }


/* using function syntax */

// const container = document.getElementById('app');
// if (container) { 
//   const reactDomRoot = ReactDOM.createRoot(container);
//   reactDomRoot.render(h(_PlanetPage));
// }




/* Avatar Rendering */

const container = document.getElementById('app');
if (container) { 
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(AvatarPage));
}
