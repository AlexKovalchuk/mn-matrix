import {
  INITIAL_STATE,
  GENERATE_MATRIX,
  INCREASE_SQUARE_VALUE,
  MOUSE_SQUARE_ENTER,
  MOUSE_SQUARE_LEAVE,
  MOUSE_SUM_ENTER,
  MOUSE_SUM_LEAVE,
} from "./matrix.constants";

export const matrixReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOUSE_SUM_ENTER:
    case MOUSE_SUM_LEAVE:
    case MOUSE_SQUARE_LEAVE:
    case MOUSE_SQUARE_ENTER:
    case GENERATE_MATRIX:
    case INCREASE_SQUARE_VALUE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
