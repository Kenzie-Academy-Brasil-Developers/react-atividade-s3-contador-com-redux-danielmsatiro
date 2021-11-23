import { useSelector, useDispatch } from "react-redux";
import { addCount, subCount } from "../../store/modules/counter/actions";

export const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(addCount())}> + </button>
      <button onClick={() => dispatch(subCount())}> - </button>
    </div>
  );
};
