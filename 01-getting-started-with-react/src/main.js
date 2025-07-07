import { createElement } from './lib/react.js';
import { createRoot } from './lib/react-dom.js';


const listData = {
  items: [],
};

const reactiveListData = new Proxy(listData, {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, newValue) {
    const oldValue = target[prop];
    target[prop] = newValue;
    render();
    return true;
  }
})
// Proxy: listData에 직접 접근하지 않고, 대신 우회해서 데이터를 조회(reactiveListData에 접근)
// getter, setter를 가지고 있고, setter에서 상태를 감지 (target = listData) 해서
// newValue 가 들어오면 target의 값을 업데이트하고 렌더링을 다시 실행



const root = createRoot(document.getElementById('app'));

function render() {
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
  const ulElement = createElement('ul', { className: 'planet', lang: 'en'}, liLists)
  root.render(ulElement);
}

render();

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 1,
      title: 'Life on Earth'
    }
  ]
}, 1000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 2,
      title: "Saturn's Massive Storms"
    }
  ]
}, 2000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 3,
      title: 'Explore Mars Now'
    }
  ]
}, 3000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 4,
      title: 'Moonlight and Craters'
    }
  ]
}, 4000);

