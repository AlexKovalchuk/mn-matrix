import {
  GENERATE_MATRIX,
  INCREASE_SQUARE_VALUE,
  MOUSE_SQUARE_ENTER,
  MOUSE_SQUARE_LEAVE,
  MOUSE_SUM_ENTER,
  MOUSE_SUM_LEAVE,
} from "./matrix.constants";
import {
  getMatrix,
  calculateNumbers,
  nearestValues,
  calculatePercentageSums,
  addRow,
} from "../../../utils/helpers";

export const mouseLeaveSumAction = () => {
  return dispatch => {
    dispatch({
      type: MOUSE_SUM_LEAVE,
      payload: {
        hoverSum: {
          percentageValues: [],
          rowIndex: null,
          isSumHovered: false,
        }
      }
    })
  }
};

export const mouseEnterSumAction = (index, matrix, sum) => {
  return dispatch => {
    dispatch({
      type: MOUSE_SUM_ENTER,
      payload: {
        hoverSum: {
          percentageValues: calculatePercentageSums(matrix[index], sum),
          rowIndex: index,
          isSumHovered: true,
        }
      }
    })
  }
};

export const mouseLeaveAction = () => {
  return dispatch => {
    dispatch({
      type: MOUSE_SQUARE_LEAVE,
      payload: {
        hoverHighlight: {
          isHover: false,
          values: {
            nearestValue: null,
            nearestValue2: null,
          },
        }
      }
    });
  };
};

export const mouseEnterAction = (matrix, m, n, M, N, X) => {
  return dispatch => {
    dispatch({
      type: MOUSE_SQUARE_ENTER,
      payload: {
        hoverHighlight: {
          isHover: true,
          values: nearestValues(matrix, m, n, M, N, X),
        }
      }
    });
  }
};

export const increaseSquareValue = (matrix, M, N) => {
  return dispatch => {
    dispatch({
      type: INCREASE_SQUARE_VALUE,
      payload: {
        matrix: matrix,
        sumAndAverage: calculateNumbers(matrix, M, N)
      }
    })
  }
};

export const generateMatrix = (M = 5, N = 5, X = 5) => {
  return dispatch => {
    dispatch({
      type: GENERATE_MATRIX,
      payload: {
        M,
        N,
        X,
        matrix: getMatrix(M, N),
        sumAndAverage: calculateNumbers(getMatrix(M, N), M, N)
      }
    });
  };
};

export const changeRowAmountToMatrixAction = (matrix, M, N, isAdd) => {
  return dispatch => {
    const newMatrix = addRow(matrix, N, isAdd);
    dispatch({
      type: GENERATE_MATRIX,
      payload: {
        M,
        N,
        matrix: newMatrix,
        sumAndAverage: calculateNumbers(newMatrix, M, N)
      }
    });
  };
};
