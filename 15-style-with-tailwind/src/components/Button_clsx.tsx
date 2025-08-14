import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function Button_clsx({ children, size, className }:Props) {
  
  return (
    <button type="button" className={
      clsx(
        "bg-sky-500 text-sky-100 px-4 py-2 rounded-xl",
        size === 'sm' && "px-2 py-1 text-sm",
        size === 'md' && "px-4 py-2 text-base",
        size === 'lg' && "px-6 py-3 text-lg",
        className
      )
    }>{children}</button>
  )
}
export default Button_clsx

// clsx: 조건부 처리 / 병합은 따로 해주지 않음
// 병합을 위해 twMerge 같이 씀 -> 유틸 함수 사용