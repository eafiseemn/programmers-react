/* -------------------------------------------------------------------------- */
/*                     명령형 프로그래밍 (Imperative Programming)                     */
/* -------------------------------------------------------------------------- */

const container = document.getElementById('imperative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

const handleChange = (e:Event) => {
  const { checked } = e.target as HTMLInputElement;
  
  if(checked) {
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  } else {
    button.setAttribute('disabled', "true");
    button.textContent = '비활성 상태';
  }

  console.log(button);
}


checkbox.addEventListener('change', handleChange);

