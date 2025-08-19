import { useCallback, useState } from "react";

function useCounter( {
  count:initialCount = 0,
  step = 1,
  min = 0,
  max = 10,
} ) {
  const [ count, setCount ] = useState(initialCount);

  // button disabled 상태 조절 (파생)
  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  // initialCount 로 reset (initialCount 가 바뀔 때만 생성되도록 callback)
  const reset = useCallback(
    () => setCount(initialCount),
  [initialCount] );
  
  // step씩 증가시키는 함수 (until max)
  const increment = useCallback(() => setCount((prev) => {
    let nextCount = prev + step;
    if ( nextCount >= max ) nextCount = max;

    return nextCount;
  })
  , [max, step]);

  // step씩 감소시키는 함수 (until min)
  const decrement = useCallback(() => setCount((prev) => {
    let nextCount = prev - step;
    if ( nextCount <= min ) nextCount = min;

    return nextCount;
  })
  , [min, step]);


  return { count, step, isMinDisabled, isMaxDisabled, increment, decrement, reset };
}

export default useCounter;