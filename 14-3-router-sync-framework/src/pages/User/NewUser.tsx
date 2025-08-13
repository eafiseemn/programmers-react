import { useId } from "react";
import { Form } from "react-router";

// @ts-ignore
import type { Route } from "./+types/users/newUser.tsx"

// SSR 전용 actions: 함수명은 clientAction으로 고정
export async function clientAction( { request }:Route.clientActionArgs ) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  console.log(name, email);
}

export const meta = () => ([
  { title: "new | user generator" }
])


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