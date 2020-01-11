import React from "react";
import "./home.scss";
import { connect } from "react-redux";
import { Matrix } from '../../components/Matrix/Matrix';

export const Home = props => {
  const TestDescription =  (
      <div className="matrix-tz">
        *Технические условия: * Входящие параметры:

        Числа M, N, X
        <br/>
        (1) Подготовка: +++

        + Создать матрицу M*N (строчки, колонки) - Форма

        + Значение места пресечения — объект с уникальным идентификатором ID и количеством Amount: int (3-х значный рандом)

        + Найти сумму по каждой строчке M и среднее по каждому столбику N
        <br/>
        (2) Вывод таблицы: +

        + Вывести результирующие данные в таблицу с хорошим UX. В основных ячейках таблицы выводится Amount, ранее автоматически сгенерированный, справа сумма по строкам M, снизу — сумма по столбцам N.
        <br/>
        (3) Динамика ячеек:+

        + При нажатии на ячейку увеличивать значение Amount на 1 и соответственно менять среднее этого столбика и сумму этой строки

        + При наведении на ячейку подсветить X ячеек, Amount которых самый близкий к Amount текущей ячейки.

        + При наведении на ячейку суммы по строчке необходимо заменять значение ячеек на процент их вклада в общую сумму и добавить фон: столбик, который наглядно покажет величину процента. Фактически закрасить часть ячейки.
        <br/>
        (4) Динамика строк: +

        +Дать возможность удалить строку с таблицы, при этом должны поменяться средние значения по каждому столбику

        +Дать возможность добавить строку, фактически M+1. При этом строка заполняется по всем правилам таблицы."
      </div>
    );

  function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 3) return 0;

    const sorted = A.sort();
    const length = A.length;
    const right = sorted[length-1] * sorted[length-2] * sorted[length-3];
    const left = sorted[0] * sorted[1] * sorted[length-1];
    const result = right > left ? right : left;
    console.log('right', right)
    console.log('left', left)
    return result
  }

  const dna = () => {
    const codeDNA = {
      A: 1,
      C: 2,
      G: 3,
      T: 4
    }
  }
  console.log('CAGCCTA'.substring(2,5));

  function solution2(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const peaksValuesArray = [];
    const length = A.length;
    for(let i = 1; i < length-1; i++) {
      if(A[i-1] < A[i] && A[i] > A[i+1]) peaksValuesArray.push(A[i])
    }
    return peaksValuesArray.length
  }



  function solution3(A) {
    let peaks = [];

    for (let i = 1; i < A.length - 1; i++) {
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
        peaks.push(i);
      }
    }

    let n = peaks.length;
    if (n <= 2) {
      return n;
    }

    let maxFlags = Math.min(n, Math.ceil(Math.sqrt(A.length)));
    let distance = maxFlags;
    let rightPeak = peaks[n - 1];

    for (let k = maxFlags - 2; k > 0; k--) {
      let flags = k;
      let leftPeak = peaks[0];

      for (let i = 1; i <= n - 2; i++) {
        if (peaks[i] - leftPeak >= distance && rightPeak - peaks[i] >= distance) {
          if (flags === 1) {
            return k + 2;
          }

          flags--;
          leftPeak = peaks[i];
        }

        if (rightPeak - peaks[i] <= flags * (distance + 1)) {
          break;
        }
      }

      if (flags === 0) {
        return k + 2;
      }

      distance--;
    }

    return n;
  }

  console.log(solution2([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]))
  console.log(solution2([1,5,3,4,3,4,1,2,3,4,6,2]))
  console.log(solution2([7, 10, 4, 5, 7, 4, 6, 1, 4, 3, 3, 7]))
  console.log(solution2([1, 4, 6, 8]))
  console.log('-------')
  console.log(solution3([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]))
  console.log(solution3([1,5,3,4,3,4,1,2,3,4,6,2]))
  console.log(solution3([7, 10, 4, 5, 7, 4, 6, 1, 4, 3, 3, 7]))
  console.log(solution3([1, 4, 6, 8]))


  return (
    <div className="home-container">
      <h1 className="home-title">MN-MATRIX</h1>


      <div className="home-page-content">
        <Matrix />
        {TestDescription}
      </div>

    </div>
  );
};
