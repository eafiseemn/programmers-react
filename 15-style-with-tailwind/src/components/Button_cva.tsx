import tw from "@/utils/tw";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2', 
  {
    variants: {
      intent: {
        primary: 'bg-sky-600 text-white hover:bg-sky-800',
        secondary: 'bg-orange-600 text-white hover:bg-orange-800',
        ghost: 'bg-slate-400 text-white hover:bg-slate-100'
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
      },
      block: {
        true: 'w-full justify-center',
        false: ''
      },
    },
    defaultVariants: {
        // prop으로 아무것도 떨어지지 않았을 때 속성
        intent: 'primary',
        size: 'md',
        block: false
      },
    compoundVariants: [
      // 특정 조건에 부합할 때 (intent === 'secondary' && size === 'lg') 스타일
      {
        intent: 'secondary',
        size: 'lg',
        class: 'border border-slate-300'
      }
    ]
  }
)


// interface Props {
//   children: React.ReactNode;
//   className?: string;
//   disabled?: boolean;
// }

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  }
// React에서 Button이 가지고 있는 속성에 대한 props 받아오기
// + CVA 에서 VariantProps 를 사용하기 

function Button_cva({ children, intent, size, className, loading = false, block, ...rest }:ButtonProps) {

  return (
    <button 
      type="button" 
      className={tw(
        buttonVariants({intent, size, block}), 
        className,
        loading ? 'bg-amber-400' : 'bg-pink-300'
      )}
      {...rest}
    >{children}</button>
  )
}
export default Button_cva