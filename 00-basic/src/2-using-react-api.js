/* -------------------------------------------------------------------------- */
/*                         Virtual DOM by React API                           */
/* -------------------------------------------------------------------------- */

import React from "./lib/react.js";
import ReactDOM from "./lib/react-dom.js"

// esm (https://esm.sh/#docs) 에서 제공하는 패키지
console.log(React);
console.log(ReactDOM);

// 자식 요소 생성 및 속성 & 컨텐츠 설정
const button = React.createElement('button', {type: 'button'}, "hello 🥳")

// 부모 요소 생성 및 속성 설정, 요소간 관계 형성
const div = React.createElement('div', {
  className:'react-virtual',
  lang: 'en',
  'aria-label': '버튼 태그의 부모'
}, button)

// 실제 DOM에 마운트
const app = document.getElementById('app')
const root = ReactDOM.createRoot(app);
root.render(div);