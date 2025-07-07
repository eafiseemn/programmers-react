/* -------------------------------------------------------------------------- */
/*                          Create Ul - Class Syntax                          */
/* -------------------------------------------------------------------------- */

import React, { createElement as h } from '../../lib/react.js';

export class PlanetList extends React.Component {
  render() {
    const { lang, children } = this.props;
    return h('ul', { className: "planet", lang, children })
  }
}


// const children = listData.items.map(li => h(PlanetItem, {...li, key:li.id}));
// reactDomRoot.render(h(PlanetList));