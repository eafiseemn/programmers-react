/* -------------------------------------------------------------------------- */
/*                            Create Planet Banners                           */
/* -------------------------------------------------------------------------- */
// Figma: https://www.figma.com/design/E4OtnsMJgDDD7CattXbDoM/%EA%B0%9C%EB%B0%9C-%ED%95%B8%EB%93%9C%EC%98%A4%ED%94%84--React-Practice-?node-id=1-3&t=SjKxmHq2v7KDbCzL-1

import { createElement } from './lib/react.js';
import { createRoot } from './lib/react-dom.js';

{/* <ul class="planet" lang="en">
  <li class="item">
    <img src="/planet/image-01.jpg" alt="Earth" />
    <span class="content">Life on Earth</span>
    <button type="button" title="아이템 이동 (위/아래 화살표 키 활용)">
      <img
        src="/icons/icon.svg"
        alt="아이템 이동 (위/아래 화살표 키 활용)" />
    </button>
  </li>
</ul>  */}

const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};

const liLists = listData.items.map(({id, title}) => {
  const liElement = createElement('li', {className: "item", key:id}, 
    createElement('img', {src: `/planet/image-0${id}.jpg`, alt: ""}),
    createElement('span', {className: "content"}, title),
    createElement('button', {type:"button", title:"아이템 이동"},
      createElement('img', {src:"/icons/icon.svg", alt:"아이템 이동"})
    )
  );
  return liElement;
})

const ul = createElement('ul', { className: 'planet', lang: 'en'}, liLists)

const root = createRoot(document.getElementById('app'));
root.render(ul);