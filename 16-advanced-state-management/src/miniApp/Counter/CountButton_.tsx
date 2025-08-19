import { memo } from 'react';
import S from './style.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onUpdate: () => void;
}

function CountButton_( { children, onUpdate, ...restProps }:Props ) {
  return (
    <button 
      type="button"
      className={S.button}
      {...restProps}
      onClick={onUpdate}
    >{children}</button>
  )
}

export default memo(CountButton_);