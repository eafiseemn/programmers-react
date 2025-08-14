import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'secondary'
}

function Button_twMerge({ children, className, type }:Props) {

  return (
    <button type="button" className={
      twMerge(
        `bg-sky-500 text-sky-50 px-4 py-2 rounded-full`,
        type === 'primary' ? 'bg-primary text-secondary' : 'bg-secondary text-primary',
        className,
      )
    }>{ children }</button>
  )
}
export default Button_twMerge