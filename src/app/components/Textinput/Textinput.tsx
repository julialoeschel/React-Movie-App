import React from 'react';
import styles from './Textinput.module.css';

type TextinputProps = {
  labelName: string;
  inputValue: string;
  setInputValue: (inPutValue: string) => void;
};

function Textinput({
  labelName,
  inputValue,
  setInputValue,
}: TextinputProps): JSX.Element {
  return (
    <label className={styles.inputlabel}>
      {labelName}
      <input
        className={styles.textinput}
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </label>
  );
}

export default Textinput;
