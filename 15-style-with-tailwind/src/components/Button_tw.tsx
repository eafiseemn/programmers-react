import tw from "@/utils/tw";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

function Button_tw({ children, size, className, disabled }:Props) {
  
  const [ buttonDisabled, setButtonDisabled ] = useState(disabled);

  const toggleDisabled = () => {
    setButtonDisabled(prev => !prev);
  }
  return (
    <>
      <button type="button" disabled={buttonDisabled}  className={
          tw(
            "bg-sky-500 text-sky-100 px-4 py-2 rounded-xl",
            size === 'sm' && "px-2 py-1 text-sm",
            size === 'md' && "px-4 py-2 text-base",
            size === 'lg' && "px-6 py-3 text-lg",
            buttonDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
            className
          )
      }>{children}</button>
      <button 
        onClick={toggleDisabled}
        className="m-4 rounded-full bg-slate-500 text-slate-100 text-xs px-2 py-1 cursor-pointer"
      >Toggle</button>
    </>
  )
}
export default Button_tw

// clsx: 조건부 처리 / 병합은 따로 해주지 않음
// 병합을 위해 twMerge 같이 씀 -> 유틸 함수 사용