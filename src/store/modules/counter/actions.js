import { ADD_COUNTER, SUB_COUNTER } from "./actionType";

export const addCount = () => ({
  type: ADD_COUNTER,
});

export const subCount = () => ({
  type: SUB_COUNTER,
});
