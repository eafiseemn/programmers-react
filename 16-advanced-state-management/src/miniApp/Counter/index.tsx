import tw from "@/utils/tw";
import S from './style.module.css';
import { memo, useMemo } from "react";
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";
import { GrFormDown, GrFormUp } from "react-icons/gr";
import { useCountStore } from "./@store";
import { useShallow } from "zustand/shallow";

function Counter( { className = '' }:{ className?:string } ) {

  // const {store} = useCountStore();
  // const { step, reset } = store;
  
  // 필요한 변수만 사용하도록 뽑아서 사용 (zustand v4- 문법 -> 이제 안됨)
  // const step = useCountStore( (s) => [s.count, s.step, s.max, s.min] );

  // zustand v5+ 는 반응성 데이터를 유지하기 위해 useShallow 사용 필요
  const [ count, step, min, max, reset, setStep ] = useCountStore( 
    useShallow((s) => [ s.count, s.step, s.min, s.max, s.reset, s.setStep ]) 
  );

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  return (
    <>
    <div className={tw(S.component, className)}>
      <CountDisplay />
      <div role="group" className={S.group}>
        <CountButton 
          type="+"
          title={incrementLabel} 
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
        >{ useMemo(() => <GrFormUp />, []) }</CountButton>
        <CountButton
          type="-"
          title={decrementLabel} 
          aria-label={decrementLabel}
          disabled={isMinDisabled}
        >{ useMemo(() => <GrFormDown />, []) }</CountButton>
      </div>
    </div>
    <button 
      type="button" 
      title="초기화" 
      aria-label="초기화" 
      className="my-2 px-2 py-1 border border-slate-400 rounded-sm text-xs cursor-pointer" 
      onClick={reset}
    >초기화</button>
    <input 
      type="number" 
      className="border border-slate-400 px-2 py-1 text-xs w-26" 
      placeholder="step 값 입력" 
      min={min + 1}
      max={max}
      onChange={(e) => setStep(Number(e.target.value))}
    />
    </>
  )
}

export default memo(Counter)