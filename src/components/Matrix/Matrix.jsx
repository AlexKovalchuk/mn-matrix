import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {Table, Button} from "react-bootstrap";
import {
  generateMatrix,
  increaseSquareValue,
  mouseEnterAction,
  mouseLeaveAction,
  mouseEnterSumAction,
  mouseLeaveSumAction,
  changeRowAmountToMatrixAction,
} from "./store/matrix.actions";

const MatrixComponent = props => {
  const {
    matrixReducer,
    generateMatrix,
    increaseSquareValue,
    mouseEnterAction,
    mouseLeaveAction,
    mouseEnterSumAction,
    mouseLeaveSumAction,
  } = props;
  const { matrix, sumAndAverage, M, N } = matrixReducer;

  useEffect(() => {
    generateMatrix();
  }, []);

  const sumOnMouseEnterHandler = (index, sum) => {
    mouseEnterSumAction(index, matrix, sum);
  };

  const sumOnMouseLeaveSumHandler = () => {
    mouseLeaveSumAction();
  };

  const squareClickHandler = (m, n) => {
    const { matrix, M, N } = matrixReducer;
    matrix[m][n] = matrix[m][n] + 1;
    console.log('squareClickHandler', matrix, M, N);
    increaseSquareValue(matrix, M, N)
  };

  const onMouseEnterHandler = (m, n) => {
    mouseEnterAction(matrix, m, n, M, N);
  };

  const onMouseLeaveHandler = () => {
    mouseLeaveAction();
  };

  const hoverClass = (value, rowIndx) => {
    const { hoverHighlight, hoverSum } = props.matrixReducer;

    if(hoverSum.rowIndex === rowIndx) return 'highlight-hover';

    if(!value || !hoverHighlight || !hoverHighlight.isHover || !hoverHighlight.values) return '';

    const {nearestValue, nearestValue2} = hoverHighlight.values;
    if(value === nearestValue || value === nearestValue2) return 'highlight-hover';

  };

  const checkAndChangeMatrixValues = () => {
    const {matrix, hoverSum} = props.matrixReducer;
    const {isSumHovered, rowIndex, percentageValues} = hoverSum;
    let result = [...matrix];
    if (isSumHovered) result[rowIndex] = percentageValues;
    return result;
  };

  const showValue = (value, rowIndx) => {
    const { hoverSum } = props.matrixReducer;
    if(hoverSum.rowIndex === rowIndx) return `${value} %`;
    return value;
  };

  const changeRowAmountHandler = isAdd => {
    const {changeRowAmountToMatrixAction, matrixReducer} = props;
    const {matrix, M, N} = matrixReducer;
    const newM = isAdd ? M+1 : M-1;
    changeRowAmountToMatrixAction(matrix, newM, N, isAdd);
  };

  const renderTableBody = () => {
    const { averageN, sumM } = sumAndAverage;
    const bodyContent = checkAndChangeMatrixValues().map((row, indexM) => {
      return (
        <tr key={`table-tr-${indexM}`}>
          {row.map((el, indexN) => {
            if(indexN === row.length-1) {
              let cls = hoverClass(el, indexM);
              return (
                <Fragment key={`fragment-square-${indexN}`}>
                  <td
                    onMouseEnter={() => onMouseEnterHandler(indexM, indexN)}
                    onMouseLeave={onMouseLeaveHandler}
                    className={`table-square ${cls}`}
                    key={`table-td-${indexN}`}
                    onClick={() => squareClickHandler(indexM, indexN)}
                  >{showValue(el, indexM)}</td>
                  <td
                    onMouseEnter={() => sumOnMouseEnterHandler(indexM, sumM[indexM])}
                    onMouseLeave={sumOnMouseLeaveSumHandler}
                    key={`table-td-${indexN}-sum`}
                    className="sumValue"
                  >{sumM[indexM]}</td>
                </Fragment>
              )
            }
            return (
              <td
                onMouseEnter={() => onMouseEnterHandler(indexM, indexN)}
                onMouseLeave={onMouseLeaveHandler}
                onClick={() => squareClickHandler(indexM, indexN)}
                className={`table-square ${hoverClass(el, indexM)}`}
                key={`table-td-${indexN}`}
              >{showValue(el, indexM)}</td>
            );
          })}
        </tr>
      );
    });
    const averageRow = averageN.map((val, index) => {
      return (
        <td key={`average-row-td-${index}`}>{val}</td>
      )
    });
    return (
      <tbody>
      {bodyContent}
      <tr className="average-row">{averageRow}</tr>
      </tbody>
    );
  };


  return (
    <div className="table-container">
      <div className="buttons-container">
        <Button
          onClick={() => changeRowAmountHandler(true)}
          variant="secondary">
          Add Row
        </Button>
        <Button
          onClick={() => changeRowAmountHandler(false)}
          variant="danger">
          Remove Row
        </Button>
      </div>
      <Table responsive>
        {renderTableBody()}
      </Table>
    </div>
  )
};


const mapStateToProps = state => {
  return {
    matrixReducer: state.matrixReducer
  };
};

const mapDispatchToProps = {
  generateMatrix,
  increaseSquareValue,
  mouseEnterAction,
  mouseLeaveAction,
  mouseEnterSumAction,
  mouseLeaveSumAction,
  changeRowAmountToMatrixAction,
};

export const Matrix = connect(mapStateToProps, mapDispatchToProps)(MatrixComponent);