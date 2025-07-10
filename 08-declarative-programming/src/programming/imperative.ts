/* -------------------------------------------------------------------------- */
/*                     명령형 프로그래밍 (Imperative Programming)                  */
/* -------------------------------------------------------------------------- */

const template = /* html */`
<form id="form">
  <h2>프로그래머스 퀴즈!</h2>
  <h3>(명령형 프로그래밍)</h3>
  <p>프로그래머스에서 가장 잘생긴 사람은?</p>
  <textarea id="textarea"></textarea>
  <br />
  <button type="submit" id="button" disabled="true">Submit</button>
  <p id="loading" style="display: none;">Loading...</p>
  <p id="error" style="display: none; color: red;">Error!</p>
</form>
<br />
<h1 id="success" style="display: none;">정답입니다! 🥳</h1>
<hr />`

const app = document.getElementById('app');
app?.insertAdjacentHTML('beforeend', template);


const form = document.getElementById('form') as HTMLFormElement;
const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
const button = document.getElementById('button') as HTMLButtonElement;
const loading = document.getElementById('loading') as HTMLParagraphElement;
const error = document.getElementById('error') as HTMLParagraphElement;
const success = document.getElementById('success') as HTMLHeadingElement;

console.log (form, textarea, button, loading, error, success);

const hide = (el:HTMLElement) => el.style.display = 'none';
const show = (el:HTMLElement) => el.style.display = 'block';
const enable = (el:HTMLElement & {disabled:boolean}) => el.disabled = false;
const disable = (el:HTMLElement & {disabled:boolean}) => el.disabled = true;

const handleTextareaChange = () => {
  if(textarea.value.trim().length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

const submitForm = (answer:string):Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(answer.toLowerCase().trim() === '심선범') {
        resolve('👍🏻')
      } else {
        reject(new Error('땡! 너는 이미 정답을 알고있다.'))
      }
    }, 1500);
  })
}

const handleFormSubmit = async (e:SubmitEvent) => {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loading);

  try {
    const answer = textarea.value;
    await submitForm(answer);
    show(success);
    hide(form);
  }
  catch(err) {
    show(error);
    if(err instanceof Error) error.textContent = err.message;
  }
  finally {
    hide(loading);
    enable(textarea);
    textarea.value = '';
    enable(button);
  }
}

textarea.addEventListener('input', handleTextareaChange);
form.addEventListener('submit', handleFormSubmit);