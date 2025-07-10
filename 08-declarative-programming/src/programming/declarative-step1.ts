/* -------------------------------------------------------------------------- */
/*                     선언형 프로그래밍 (Declarative Programming)                    */
/* -------------------------------------------------------------------------- */

import createState from "@/lib/createState"

const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

/* 관리할 state data */
const data = {
  checked: false
}

/* state가 변경될 때 호출되는 render 함수 (createState의 콜백) */
const render = () => {
  const { checked } = state; // 상태 의존
  checkbox.checked = checked;

  if(checked) {
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  } else {
    button.setAttribute('disabled', "true");
    button.textContent = '비활성 상태';
  }
}

/* 
  state: 현재 상태, setState: 상태를 업데이트하고 render()를 실행하는 콜백
  React의 const [ count, setCount ] = useState(data.checked) 와 유사
 */
const [ state, setState ] = createState(data, render);

/* 브라우저 콘솔에서 update(true) 테스트를 할 수 있도록 타입 지정 */
declare global {
  var update: (value:boolean) => void;
}

/* setState('checked', value) 호출 */
const update = (globalThis.update = (value) => setState('checked', value)); 
  // { 
  // const nextCheckedValue = !state.checked;
  // setState('checked', nextCheckedValue);
// }

checkbox.addEventListener('change', (e:Event) => {
  const { checked } = e.target as HTMLInputElement;
  update(checked);
});