import { create } from 'zustand';

type Store = {
  count: number;
  step: number;
  max: number;
  min: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setStep: (newStep:number) => void;
}

// export const useCountStore = create<Store>()((set) => ({
//   count: 0,
//   step: 1,
//   increment: () => set((state) => ({ count: state.count + state.step })),
//   decrement: () => set((state) => ({ count: state.count - state.step })),
//   reset: () => set({ count: 0 }),
// }))


// create 함수에 generic으로 타입 지정하고 한 번 실행 - create()() 형태
// : currying function 으로 Zustand 가 알아서 type 추론하게 만듦


export const useCountStore = create<Store>()((set, _get, store) => {

  const increment = () => {
    set(( { count, step, max }) => {
      let nextCount = count + step;
      if ( nextCount >= max ) nextCount = max;

      return { count: nextCount };
    })
  }

  const decrement = () => {
    set(( { count, step, min }) => {
      let nextCount = count - step;
      if ( nextCount <= min ) nextCount = min;

      return { count: nextCount };
    })
  }

  const setStep = (newStep:number) => {
    set( { step: newStep } );
  }

  // const reset = () => set({ count: 0, step: 1, ... })
  const reset = () => set( store.getInitialState() );

  return ( {
    count: 0,
    step: 1,
    max: 10,
    min: 0,
    increment,
    decrement,
    reset,
    setStep
  });
})