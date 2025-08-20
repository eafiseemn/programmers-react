import { useCallback, useId, useState } from "react";

interface useSwitchOptions {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (next:boolean) => void;
  disabled?: boolean;
  id?: string;
}

export function useSwitch ( opts:useSwitchOptions = {} ) {
  
  const { 
    defaultChecked = false,
    checked,
    onChange,
    disabled,
    id
  } = opts;

  const [ uncontrolled, setUncontrolled ] = useState(defaultChecked);

  const reactId = useId();
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : uncontrolled;

  // 버튼을 눌렀을 때 강제 지정
  const setChecked = useCallback(
    (next:boolean) => {
      if(!isControlled) setUncontrolled(next);
      onChange?.(next)
  }, [isControlled, onChange]);

  const toggle = useCallback(
    () => {
      if(disabled) return;
      setChecked(!isChecked);
  }, [disabled, isChecked, setChecked]);

  const a11yProps = {
    // JSX tag attributes
    id: id ?? reactId,
    role: "switch" as const,
    "aria-label": String(isChecked),
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    // event binding
    onClick: () => toggle(),
    onKeyDown: (e:React.KeyboardEvent) => {
      if(disabled) return;
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
      if(e.key === 'ArrowLeft') setChecked(false);
      if(e.key === 'ArrowRight') setChecked(true);
    }
  }

  return { checked: isChecked, setChecked, toggle, a11y: a11yProps, disabled }

}