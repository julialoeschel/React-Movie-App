import React from 'react';
import styles from './Textinput.module.css';

type TextinputProps = {
  labelName: string;
};

function Textinput({ labelName }: TextinputProps): JSX.Element {
  return (
    <label className={styles.inputlabel}>
      {labelName}
      <input className={styles.textinput} type="text" />
    </label>
  );
}

export default Textinput;
