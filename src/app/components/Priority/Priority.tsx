import React from 'react';
import styles from './Priority.module.css';

type PriorityProps = {
  priority: number;
  setPriority: (priority: unknown) => void;
};

function Priority({ priority, setPriority }: PriorityProps): JSX.Element {
  return (
    <label className={styles.priority} aria-label="Priority">
      Priority
      <input
        className={styles.inputnumber}
        type="number"
        min="1"
        max="5"
        defaultValue="3"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      />
    </label>
  );
}

export default Priority;
