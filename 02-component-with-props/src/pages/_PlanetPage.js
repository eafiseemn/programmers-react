/* -------------------------------------------------------------------------- */
/*                    Create Render Page - Function Syntax                    */
/* -------------------------------------------------------------------------- */

import { listData } from '../data/data.js';
import { _PlanetItem } from '../components/planet/_PlanetItem.js';
import { _PlanetList } from '../components/planet/_PlanetList.js';
import React, { createElement as h } from '../lib/react.js';


export function _PlanetPage () {
  const children = listData.items.map(li => h(_PlanetItem, {...li, key:li.id}));
  return h(_PlanetList,
    {lang: "en", children }
  )
}



// reactDomRoot.render(h(PlanetPage, {
  //   lang: "en", 
  //   children: listData.items.map(li => h(PlanetItem, {...li, key:li.id}))}));