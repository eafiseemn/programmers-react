import tw from "@/utils/tw";
import S from './style.module.css';
import { memo, useMemo } from "react";
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";
import { GrFormDown, GrFormUp } from "react-icons/gr";

function Counter( { className = '' }:{ className?:string } ) {

  const step = 1;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  return (
    <>
    <div className={tw(S.component, className)}>
      <CountDisplay />
      <div role="group" className={S.group}>
        <CountButton 
          title={incrementLabel} 
          aria-label={incrementLabel}
          disabled={false}
        >{ useMemo(() => <GrFormUp />, []) }</CountButton>
        <CountButton
          title={decrementLabel} 
          aria-label={decrementLabel}
          disabled={false}
        >{ useMemo(() => <GrFormDown />, []) }</CountButton>
      </div>
    </div>
    <button type="button" title="초기화" aria-label="초기화" className="my-2 px-2 py-1 border border-slate-400 rounded-sm text-xs cursor-pointer">초기화</button>
    </>
  )
}

export default memo(Counter)