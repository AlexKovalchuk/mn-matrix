export const INITIAL_STATE = {
  M: 5,
  N: 5,
  X: 2,
  crossPoint: {
    ID: 1,
    Amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100
  },
  sumAndAverage: {
    sumM: [],
    averageN: []
  },
  matrix: [],
  hoverHighlight: {
    isHover: false,
    values: {
      nearestValue: null,
      nearestValue2: null,
    },
  },
  hoverSum: {
    percentageValues: [],
    rowIndex: null,
    isSumHovered: false,
  }
};

export const GENERATE_MATRIX = "GENERATE_MATRIX";
export const INCREASE_SQUARE_VALUE = "INCREASE_SQUARE_VALUE";
export const MOUSE_SQUARE_ENTER = "MOUSE_SQUARE_ENTER";
export const MOUSE_SQUARE_LEAVE = "MOUSE_SQUARE_LEAVE";
export const MOUSE_SUM_ENTER = "MOUSE_SUM_ENTER";
export const MOUSE_SUM_LEAVE = "MOUSE_SUM_LEAVE";