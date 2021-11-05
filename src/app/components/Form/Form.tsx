import React from 'react';
import Priority from '../Priority/Priority';
import Textinput from '../Textinput/Textinput';
import Button from '../Button/Button';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <form action="submit" className={styles.form}>
      <Textinput labelName={'Movie Title'} />
      <Textinput labelName={'Movie Description'} />
      <Priority />
      <Button />
    </form>
  );
}

export default Form;
