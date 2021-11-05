import React from 'react';
import styles from './Priority.module.css';

type PriorityProps = {
  priority: number;
};

function Priority({ priority }: PriorityProps): JSX.Element {
  return (
    <label className={styles.priority} aria-label="Priority">
      Priority
      <input
        className={styles.inputnumber}
        type="number"
        min="1"
        max="5"
        value={priority}
      />
    </label>
  );
}

export default Priority;
