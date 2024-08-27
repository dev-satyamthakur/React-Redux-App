import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="ui vertical masthead center aligned segment">
        <h1>Count is {count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="green ui button"
        >
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="red ui button">
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
