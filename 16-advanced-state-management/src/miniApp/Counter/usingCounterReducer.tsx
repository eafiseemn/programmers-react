import { useReducer } from "react"

type State = { 
  count:number;
}
type Action = 
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set", payload: number }
  | { type: "reset" }

const INITIAL:State = { count: 0 };

// reducer = dispatch
const reducer = ( state:State, action:Action ):State => {
  // conditional action -> switch...case
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      
    case "decrement":
      return { count: state.count - 1 };
      
    case "reset":
      return INITIAL;
      
    case "set":
      return { count: action.payload };
      
    default:
      return state;
  }
}
  
  
function CounterReducer() {
    
  const initialArg = INITIAL;
  const [ state, dispatch ] = useReducer( reducer, initialArg );
  const setTo = 10;

  return (
    <div className="text-center">
      <p>Count : {state.count}</p>
      <button type="button" className="px-2 py-1 border border-accent m-1 rounded" 
        onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button type="button" className="px-2 py-1 border border-accent m-1 rounded"
        onClick={() => dispatch({ type: "increment" })}>+</button>
      <hr />
      <button type="button" className="px-2 py-1 border border-accent m-1 rounded text-sm"
        onClick={() => dispatch({ type: "set", payload: setTo })}>Change to {setTo}</button>
      <hr />
      <button type="button" className="px-2 py-1 border border-accent m-1 rounded text-sm"
        onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  )
}

export default CounterReducer