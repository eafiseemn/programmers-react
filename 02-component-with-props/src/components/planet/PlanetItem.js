/* -------------------------------------------------------------------------- */
/*                          Create Li - Class Syntax                          */
/* -------------------------------------------------------------------------- */

import React, { createElement as h } from '../../lib/react.js';

export class PlanetItem extends React.Component {
  render() {
    const { id, title } = this.props;
    console.log ( this.props );

    return h('li',
      {className: 'item'},
      h('img', { src: `/planet/image-0${id}.jpg`, alt: '' }),
      h('span', { className: 'content' }, title),
      h('button', { type: 'button', title:'move item' }, 
        h('img', { src: "/icons/icon.svg", alt: 'move item'})
      )
    )
  }
}




// class PlanetItem extends React.Component {
//   /* react에서는 constructor를 안써도 동일하게 동작 */
//   // constructor() {
//   //   super();
//   //   this.props = props;
//   //   console.log(props);
//   // }
//   render() {
//     const { id, title } = this.props; // constructor가 없는 대신 props에 자동으로 들어온 값이 전달됨
//     console.log ( this.props );

//     /* return virtual DOM */ 
//     // return createElement('div', null, 'hello react class')
//     return h('li',
//       {className: 'item'},
//       h('img', { src: `/planet/image-0${id}.jpg`, alt: '' }),
//       h('span', { className: 'content' }, title),
//       h('button', { type: 'button', title:'move item' }, 
//         h('img', { src: "/icons/icon.svg", alt: 'move item'})
//       )
//     )
//   }
// }

// reactDomRoot.render(h(PlanetItem, {id: 1, title: "Life on Earth"}));