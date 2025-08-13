import { useId } from "react"
import { Form } from "react-router";

function NewUser() {

  const nameId = useId();
  const emailId = useId();

  return (
    <div>
      <h2>새로운 유저 추가</h2>
      <Form method="post">
        <div>
          <label htmlFor={nameId}>이름 : </label>
          <input type="text" name="name" id={nameId} placeholder="이름을 입력하세요" required />
        </div>
        <div>
          <label htmlFor={emailId}>이메일 : </label>
          <input type="email" name="email" id={emailId} placeholder="이메일을 입력하세요" required />
        </div>

        <button type="submit">등록</button>
      </Form>
    </div>
  )
}
export default NewUser