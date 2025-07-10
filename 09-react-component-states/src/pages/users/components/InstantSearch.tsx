import { useId } from "react"

interface Props {
  onToggle: () => void;
  isInstantSearch: boolean;
}

// {onChange}:Props
function InstantSearch({onToggle, isInstantSearch}:Props) {
  const id = useId();

  return (
    <div className="formControl" style={{marginBottom: '0.5rem'}}>
      <label htmlFor={id} style={{userSelect:'none'}}>
        <input 
          type="checkbox" 
          id={id} 
          onClick={onToggle}
          defaultChecked={isInstantSearch}
        />
        {' '}
        인스턴트 서치
      </label>
    </div>
  )
}

export default InstantSearch


// checked 가 아니라 defaultChecked를 주는 이유 :
// checked 는 user control에 의해 변경되어야하는 값인데 {isInstantSearch} 로 값을 주고 있어서 에러
// defaultChecked 는 초기값만 지정 -> 이후 onClick 에 의해 제어
