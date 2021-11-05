import React from 'react';
import styles from './Priority.module.css';

function Priority(): JSX.Element {
  return (
    <label className={styles.priority} aria-label="Priority">
      Priority
      <input
        className={styles.inputnumber}
        type="number"
        min="1"
        max="5"
        defaultValue="3"
      />
    </label>
  );
}

export default Priority;
