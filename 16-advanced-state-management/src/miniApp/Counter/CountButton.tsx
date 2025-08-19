import { memo } from 'react';
import S from './style.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

function CountButton( { children }:Props ) {
  return (
    <button 
      type="button"
      className={S.button}
    >{children}</button>
  )
}

export default memo(CountButton);