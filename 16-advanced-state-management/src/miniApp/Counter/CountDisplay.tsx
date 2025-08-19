import { useCountStore } from './@store';
import S from './style.module.css';

function CountDisplay() {

  // Props를 전달하거나 Provider를 사용하지 않아도 바로 데이터를 inject 할 수 있음
  // {} = use...() 하면 전체 변수 추출 -> 필요한 데이터만 뽑아서 사용하려면 (state) => state.변수명 으로 콜백 사용
  const count = useCountStore( (s) => s.count );

  return (
    <output className={S.output}>{ count }</output>
  )
}

export default CountDisplay