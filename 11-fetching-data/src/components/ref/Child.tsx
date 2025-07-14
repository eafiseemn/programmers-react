import { type RefObject } from "react";

interface Props {
  placeholder: string;
  ref: RefObject<HTMLInputElement | null>;
}

function Child ({placeholder, ref}:Props) {
  
  return (
    <input type="text" placeholder={placeholder} ref={ref} />
  )
}

export default Child


/* React v.19 이후 */
// forwardRef를 사용하지 않아도 되도록 Prop으로 전달 받을 수 있게 됨