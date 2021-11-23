import { ADD_COUNTER, SUB_COUNTER } from "./actionType";

export const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      console.log("passei aqui");
      return state + 1;

    case SUB_COUNTER:
      return state - 1;

    default:
      return state;
  }
};
