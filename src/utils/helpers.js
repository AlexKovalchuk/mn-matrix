
export const addRow = (matrix, N, isAdd) => {
  if(!isAdd) {
    matrix.pop();
    return matrix;
  }
  let newRow = [];
  for (let i = 0; i < N; i++) {
    newRow.push(0);
  }
  matrix.push(newRow);
  return matrix;
};

export const calculatePercentageSums = (matrixRow, sum) => {
  const zero = 0;
  return matrixRow.map(val => {
    if(sum === 0) return zero.toFixed(2);
    return (val * 100 / sum).toFixed(2);
  })
};

export const nearestValue = (matrix, m, n, M, N) => {
  const hoveredValue = matrix[m][n];
  let nearestValue = matrix[0][0];
  let nearestValue2 = null;
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      const hoveredValueDiff = Math.abs(nearestValue - hoveredValue);
      const nearestValueDiff = Math.abs(matrix[i][j] - hoveredValue);
      if(nearestValueDiff < hoveredValueDiff && matrix[i][j] !== hoveredValue) {
        nearestValue = matrix[i][j];
      }
    }
  }

  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      const dif = Math.abs(matrix[i][j] - hoveredValue);
      const nearestDif = Math.abs(nearestValue - hoveredValue);
      if(dif === nearestDif && nearestValue !== matrix[i][j]) {
        nearestValue2 = matrix[i][j]
      }
    }
  }

  return {nearestValue, nearestValue2};
};

export const getMatrix = (M, N) => {
  const matrix = [];
  if (!M || !N) return matrix;

  for (let i = 0; i < M; i++) {
    const tmpN = [];
    for (let j = 0; j < N; j++) {
      tmpN.push(1);
    }
    matrix.push(tmpN);
  }
  return matrix;
};

export const calculateNumbers = (matrix, M, N) => {
  const result = {
    sumM: [],
    averageN: []
  };
  if (!M || !N) return result;

  for (let i = 0; i < M; i++) {
    let sumM = 0;
    for (let j = 0; j < N; j++) {
      sumM += matrix[i][j];
    }
    result.sumM.push(sumM);
  }

  let row;
  let col;
  const sumN = matrix[0].slice();
  for (row = 1; row < matrix.length; row++) {
    for (col = 0; col < sumN.length; col++) {
      sumN[col] += matrix[row][col];
    }
  }
  result.averageN = sumN.map(number => {
    return (number / M).toFixed(2);
  });
  return result;
};
