/* 순수하지 않은 함수
 : Side Effect를 유발하는 함수
  - DOM 조작 (document.getElementById)
  - 브라우저 API 호출 (setTimeout, setInterval)
  - localStorage 접근
  - 서버 요청 (fetch, xhr, axios)
  - 콘솔 출력 (console.log)
  - 상태 저장소에 쓰기/읽기 (contextAPI, Zustand, Redux, RTK)
*/

function multiply(n:number):number {
  return n * multiplier;
}

let multiplier = 2;
console.log( multiply(3) ); // 6

multiplier = 3;
console.log( multiply(3) ); // 9

// 외부 값을 참조하고 있기 때문에 동일 입력(3)에 대한 출력 값이 달라짐 -> 비순수함 (불순함)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let _counter = 0;

function greet(name:string):string {
  _counter++;
  console.log(`Hello ${name}!`);
  return `Hello ${name}!`
}

console.log( greet('🐹') );
// 동일 입력에 대한 동일 출력
// 하지만 내가 해야하는 일 외의 다른 일 처리 => 불순한 함수
// counter++, console.log => Side Effect (부수 효과) 발생

// 순수 함수의 요건 (recap)
// 입력 -> 출력    : 결과는 오직 입력에만 따라야 함
// 외부 변수 사용 X : 외부 상태에 의존하면 순수하지 않음
// 예측 가능성      : 같은 인자 -> 항상 같은 결과 반환
// Side Effect   : 해야하는 일 외의 부수효과 발생하지 않음



async function _fetchUser(userId:string = '') {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if(!response.ok) {
      throw new Error('유저 정보를 가져오지 못했습니다.');
    }

    const user = await response.json();
    console.log( user );

    const userEl = document.getElementById('user-info');

    if(userEl) {
      userEl.textContent = `이름 : ${user.name}, 이메일 : ${user.email}`
    }
  }
  catch(err) {
    if( err instanceof Error ) {
      console.error('에러 발생 :', err.message);
    }
  }
}

console.log( _fetchUser('1') );

// Side Effect : 데이터 가져오기, 콘솔 출력, DOM에 렌더링
// fetch 만 하더라도 서버 데이터가 변경되면 동일 입력에 대한 출력이 달라지므로 외부 변수 참조 Side Effect


// React의 Component(함수)는 순수해야함
// 무조건 JSX Element 만 반환하도록 설계