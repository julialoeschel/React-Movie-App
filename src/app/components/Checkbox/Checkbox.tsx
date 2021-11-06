import React from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  movieWatched: boolean;
};

function Checkbox({ movieWatched }: CheckboxProps): JSX.Element {
  return (
    <label className={styles.checkbox} aria-label="watched">
      Watched
      <input type="checkbox" defaultChecked={movieWatched} />
    </label>
  );
}

export default Checkbox;
