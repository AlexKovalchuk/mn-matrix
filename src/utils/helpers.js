
export const generateRandomValue = (min = 100, max = 999) => {
  return Math.floor(Math.random() * (max - min)) + min
};

export const addRow = (matrix, N, isAdd) => {
  if(!isAdd) {
    matrix.pop();
    return matrix;
  }
  let newRow = [];
  for (let i = 0; i < N; i++) {
    newRow.push(generateRandomValue(100, 999));
  }
  matrix.push(newRow);
  return matrix;
};

export const calculatePercentageSums = (matrixRow, sum) => {
  const zero = 0;
  return matrixRow.map(el => {
    if(sum === 0) return zero.toFixed(2);
    return {
      amount: (el.amount * 100 / sum).toFixed(2)
    }
  })
};

export const nearestValues = (matrix, m, n, M, N, X) => {
  const hoveredSquare = matrix[m][n];
  let arrayOfNearestValuesSquares = []; // length should be equal X
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      let currSquare = {...matrix[i][j]};
      currSquare.diff = Math.abs(currSquare.amount - hoveredSquare.amount);
      if(arrayOfNearestValuesSquares.length < X && currSquare.amount !== hoveredSquare.amount) {
        arrayOfNearestValuesSquares.push(currSquare);
      } else if (currSquare.amount !== hoveredSquare.amount) {
        arrayOfNearestValuesSquares.push(currSquare);
        arrayOfNearestValuesSquares.sort((a, b) => a.diff - b.diff);
        arrayOfNearestValuesSquares.pop();
      }
    }
  }
  return arrayOfNearestValuesSquares;
};

export const getMatrix = (M, N) => {
  const matrix = [];
  if (!M || !N) return matrix;

  for (let i = 0; i < M; i++) {
    const tmpN = [];
    for (let j = 0; j < N; j++) {
      const squareObject = {
        id:`${i}${j}`,
        amount: generateRandomValue(100, 999),
        // amount: 1,
      };
      tmpN.push(squareObject);
    }
    matrix.push(tmpN);
  }
  return matrix;
};

export const changeSumAndAverage = (matrix, sumAndAverage, M, N, m, n) => {
  const result = {...sumAndAverage};
  if (!M || !N) return result;
  let sumM = {amount: 0};
  matrix[m].forEach(sq => sumM.amount += sq.amount);
  let tmpColSum = 0;
  matrix.forEach(row => tmpColSum += row[n].amount);
  result.sumM[m] = sumM;
  result.averageN[n] = (tmpColSum / M).toFixed(2);
  return result;
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
      sumM += matrix[i][j].amount;
    }
    result.sumM.push({
      amount: sumM
    });
  }

  const sumN = matrix[0].map(el => el.amount);
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      sumN[col] += matrix[row][col].amount;
    }
  }

  result.averageN = sumN.map(number => {
    return (number / M).toFixed(2);
  });
  return result;
};
