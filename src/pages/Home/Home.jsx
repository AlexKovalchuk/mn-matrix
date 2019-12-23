import React, { useEffect, Fragment } from "react";
import "./home.scss";
import { connect } from "react-redux";
import { Matrix } from '../../components/Matrix/Matrix';

const HomeComponent = props => {
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
