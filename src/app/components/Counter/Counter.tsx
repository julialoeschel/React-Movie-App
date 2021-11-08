import React from 'react';
import style from './Counter.module.css';

type CounterProps = {
  count: number;
  Decrease: () => void;
  Increase: () => void;
};

function Counter({ count, Decrease, Increase }: CounterProps): JSX.Element {
  return (
    <div className={style.counterContainer}>
      <button className={style.counterButton} onClick={Decrease}>
        -
      </button>
      <span className={style.counterspan}>{count}</span>
      <button className={style.counterButton} onClick={Increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
