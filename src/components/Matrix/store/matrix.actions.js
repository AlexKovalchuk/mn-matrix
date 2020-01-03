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
  changeRowAmount,
  changeSumAndAverage,
  calculatePercentageMatrixSums,
} from "../../../utils/helpers";

export const mouseLeaveSumAction = () => {
  return dispatch => {
    dispatch({
      type: MOUSE_SUM_LEAVE,
      payload: {
        hoverSum: {
          rowIndex: null,
          isSumHovered: false,
        }
      }
    })
  }
};

export const mouseEnterSumAction = (index) => {
  return dispatch => {
    dispatch({
      type: MOUSE_SUM_ENTER,
      payload: {
        hoverSum: {
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
          values: [],
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

export const increaseSquareValue = (matrix, sumAndAverage, M, N, m, n) => {
  return dispatch => {
    dispatch({
      type: INCREASE_SQUARE_VALUE,
      payload: {
        matrix: matrix,
        sumAndAverage: changeSumAndAverage(matrix, sumAndAverage, M, N, m, n),
        hoverSum: {
          percentageMatrixValues : calculatePercentageMatrixSums(matrix, sumAndAverage.sumM),
          rowIndex: null,
          isSumHovered: false,
        }
      }
    })
  }
};

export const generateMatrix = (M = 5, N = 5, X = 5) => {
  const generatedMatrix = getMatrix(M, N);
  const sumAndAverage = calculateNumbers(generatedMatrix, M, N);
  return dispatch => {
    dispatch({
      type: GENERATE_MATRIX,
      payload: {
        M,
        N,
        X,
        matrix: generatedMatrix,
        sumAndAverage: sumAndAverage,
        hoverSum: {
          percentageMatrixValues : calculatePercentageMatrixSums(generatedMatrix, sumAndAverage.sumM),
          rowIndex: null,
          isSumHovered: false,
        }
      }
    });
  };
};

export const changeRowAmountToMatrixAction = (matrix, M, N, isAdd) => {
  return dispatch => {
    const newMatrix = changeRowAmount(matrix, M, N, isAdd);
    const sumAndAverage = calculateNumbers(newMatrix, M, N);
    dispatch({
      type: GENERATE_MATRIX,
      payload: {
        M,
        N,
        matrix: newMatrix,
        sumAndAverage: calculateNumbers(newMatrix, M, N),
        hoverSum: {
          percentageMatrixValues : calculatePercentageMatrixSums(newMatrix, sumAndAverage.sumM),
          rowIndex: null,
          isSumHovered: false,
        }
      }
    });
  };
};
