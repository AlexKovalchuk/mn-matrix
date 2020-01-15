export const BinaryGap = N => {
  if(!N || N < 1) return 0;

  const binary = N.toString(2);
  console.log('binary', binary);
  console.log('binary', binary.match(/0+1/g));
  let found = binary.match(/0+1/g);
  if(!found) return 0;
  const sorted = found.sort((a, b) => b.length - a.length);
  console.log('sorted', sorted);
  console.log(sorted[0].slice(0,sorted[0].length-1).length)
};

export const RotateArrayByNumber = (A, K) => {
  console.log('A = ', A, 'K = ', K)
  const length = A.length;
  if(length < 2 || K < 0 || K > 100) {
    console.log('result1', A);
    return A;
  }
  if(length < K ) K = K % length
  const resultArr = [];
  for(let i = 0; i < length; i++) {
    // debugger;
    let shiftingIndex = i+K;
    if(shiftingIndex > length - 1) shiftingIndex = shiftingIndex - length ;
    resultArr[shiftingIndex] = A[i];
  }
  console.log('result2', resultArr);
  return resultArr;
};
