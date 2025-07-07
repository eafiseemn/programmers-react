/* -------------------------------------------------------------------------- */
/*                      Create Render Page - Class Syntax                     */
/* -------------------------------------------------------------------------- */

import { listData } from '../data/data.js';
import { PlanetItem } from '../components/planet/PlanetItem.js';
import { PlanetList } from '../components/planet/PlanetList.js';
import React, { createElement as h } from '../lib/react.js';


export class PlanetPage extends React.Component {
  render() {
    const children = listData.items.map(li => h(PlanetItem, {...li, key:li.id}));
    return h(PlanetList,
      {lang: "en", children }
    )
  }
}



// reactDomRoot.render(h(PlanetPage, {
  //   lang: "en", 
  //   children: listData.items.map(li => h(PlanetItem, {...li, key:li.id}))}));