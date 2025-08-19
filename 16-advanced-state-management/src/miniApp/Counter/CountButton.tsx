import { memo } from 'react';
import S from './style.module.css';
import { useCountStore } from './@store';
// import { useShallow } from 'zustand/shallow';

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: "+" | "-"
}

function CountButton( { type, children }:Props ) {

  // state의 전체 값을 구독해서 re-rendering 유발
  // const { increment, decrement } = useCountStore();  

  // const handleClick = () => {
  //   if ( !type ) return;
  //   if ( type === "+" ) return increment();
  //   if ( type === "-" ) return decrement();
  // }

  const handleClick = useCountStore( (s) => 
    type === "+" ? s.increment : s.decrement
  );

  return (
    <button 
      type="button"
      className={S.button}
      onClick={handleClick}
    >{children}</button>
  )
}

export default memo(CountButton);