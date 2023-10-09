import { ReactNode, useReducer, ChangeEvent } from "react";

const initialState = {
  count: 0,
  text: "",
};

const enum REDUCER_TYPES {
  INCREMENT,
  DECREMENT,
  RESET,
  SET_TEXT,
}

type ReducerAction = {
  type: REDUCER_TYPES;
  payload?: string;
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_TYPES.RESET:
      return { ...state, count: 0 };
    case REDUCER_TYPES.SET_TEXT:
      return { ...state, text: action.payload ?? ""};
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  //   const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const Incresment = () => {
    dispatch({ type: REDUCER_TYPES.INCREMENT });
  };
  const Decresment = () => {
    dispatch({ type: REDUCER_TYPES.DECREMENT });
  };
  const ResetCount = () => {
    dispatch({ type: REDUCER_TYPES.RESET });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_TYPES.SET_TEXT, payload: e.target.value });
  };
  return (
    <div>
      <h3>{children(state.count)}</h3>
      <button onClick={Incresment}>+</button>
      <button onClick={Decresment}>-</button>
      <button onClick={ResetCount}>Reset</button>
      <br />
      <input type="text" onChange={handleChange} />
      <h4>{state.text}</h4>
    </div>
  );
};

export default Counter;
