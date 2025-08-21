import './Switch.css';
import { useSwitchReducer } from '@/hook/useSwitchReducer';

interface Props {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
}

function SwitchReducer( { size = 'md', ...restProps }:Props ) {

  const { checked, disabled, a11y } = useSwitchReducer(restProps);

  return (
    <button 
      type="button"
      {...a11y}
      className={[
        'switch',
        `switch--${size}`,
        checked ? 'is-on' : 'is-off',
        disabled ? 'is-disabled' : '',
      ].join(' ')}
    >
      <span className="switch__track"></span>
      <span className="switch__thumb"></span>
    </button>
  )
}

export default SwitchReducer