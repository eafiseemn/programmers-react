import { forwardRef } from "react";

interface Props {
  placeholder: string;
}

const Child = forwardRef<HTMLInputElement, Props>(({placeholder}, ref) => {
  
  return (
    <input type="text" placeholder={placeholder} ref={ref} />
  )
})
export default Child


/* useRef의 자식 요소 기본 구문 */
// forwardRef<HTMLType, Props>( ({...props}, ref) => {
//   return (
//     <div ref={ref}></div>
//   )
// } )