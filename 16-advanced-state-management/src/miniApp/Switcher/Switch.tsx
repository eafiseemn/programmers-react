import { useSwitch } from '@/hook/useSwitch';
import './Switch.css';

interface Props {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
}

function Switcher( { size = 'md', ...restProps }:Props ) {

  const { checked, disabled, a11y } = useSwitch(restProps);

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

export default Switcher