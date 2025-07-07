/* -------------------------------------------------------------------------- */
/*                         Create Ul - Function Syntax                        */
/* -------------------------------------------------------------------------- */

import React, { createElement as h } from '../../lib/react.js';

export function _PlanetList (props) {
  const { lang, children } = props;
  return h('ul', { className: "planet", lang, children })
}


// const children = listData.items.map(li => h(PlanetItem, {...li, key:li.id}));
// reactDomRoot.render(h(PlanetList));