/* -------------------------------------------------------------------------- */
/*                     선언형 프로그래밍 (Declarative Programming)                 */
/* -------------------------------------------------------------------------- */

import { useMemo, useState } from "react";
import debounce from 'lodash.debounce';

type Status = 'success' | 'typing' | 'submitting';

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

function Form() {

  const [ answer, setAnswer ] = useState('');
  const [ error, setError ] = useState<Error | null>(null);
  const [ status, setStatus ] = useState<Status>('typing');

  const debounceSetAnswer: (value:string) => void = useMemo(() => {
    return debounce((value: string) => setAnswer(value), 300) }
   , [])

  if( status === 'success' ) {
    return (
      <h1 id="success-dec">정답입니다! 🥳</h1>
    )
  }
  
  const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    debounceSetAnswer(e.target.value);
  }

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitForm(answer);
      setStatus('success');
    } 
    catch(err) {
      setStatus('typing');
      if(err instanceof Error) {
        setError(err);
      }
    }
  }

  return (
    <form id="form">
      <h2>프로그래머스 퀴즈!</h2>
      <h3>(선언형 프로그래밍)</h3>
      <p>프로그래머스에서 가장 잘생긴 사람은?</p>
      <textarea 
        id="textarea" 
        onChange={handleTextareaChange}
        disabled={ status === 'submitting' }
      ></textarea>
      <br />
      <button 
        type="submit" 
        id="button" 
        onClick={handleSubmit}
        disabled={status === 'submitting'}
      >Submit</button>
      {status === 'submitting' && <p id="loading">Loading...</p>}
      {error !== null && <p id="error" style={{color:"red"}}>{error.message}</p>}
    </form>
  )
}

export default Form