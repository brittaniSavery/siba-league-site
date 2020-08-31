import React from "react";

export default function useReducerWithThunk(
  reducer,
  initialState,
  initFunction
) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState,
    initFunction
  );

  const getState = () => state;

  const customDispatch = (action) => {
    if (typeof action === "function") {
      action(customDispatch, getState);
    } else {
      dispatch(action);
    }
  };
  return [state, customDispatch];
}
