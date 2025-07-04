/* -------------------------------------------------------------------------- */
/*                          Virtual DOM vs Actual DOM                         */
/* -------------------------------------------------------------------------- */

import { createElement, isValidElement } from './lib/virtual/index.js'
import { createRoot } from './lib/virtual-dom/index.js'


/* Actual DOM 조작 방식 */

// 부모 요소 생성
const divElement = document.createElement('div');
divElement.classList.add('actualDOM');

// 자식 요소 생성
const buttonElement = document.createElement('button');
// 자식 요소 속성 설정
buttonElement.setAttribute('type', 'button');
// 자식 요소 컨텐츠 설정
buttonElement.textContent = "hello 🍎"

// 요소간 관계 형성
divElement.append(buttonElement);

// 실제 DOM에 마운트 (mount = 착장, 렌더링)
const actualDomElement = document.getElementById('app');
actualDomElement.append(divElement);



/*
  virtual DOM (가상 문서 객체 모델)
  실제 DOM을 추상화 (단순화)
 */

// 자식 요소 생성 및 속성 & 컨텐츠 설정
const buttonV_Element = createElement('button', {type: 'button', 'aria-label': '인사말'}, 'hola 🍏')

// 부모 요소 생성 및 요소간 관계 형성
const divV_Element = createElement('div', {className: 'virtualDOM'}, buttonV_Element);

// 실제 DOM에 마운트
const VirtualDomElement = document.getElementById('app');
const vRoot = createRoot(VirtualDomElement);
vRoot.render(divV_Element);

console.log(isValidElement(divElement));    // false (가상요소 아님)
console.log(isValidElement(divV_Element));  // true (가상요소)
