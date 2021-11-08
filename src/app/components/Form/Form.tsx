import React, { useState } from 'react';
import Priority from '../Priority/Priority';
import Textinput from '../Textinput/Textinput';
import Button from '../Button/Button';
import styles from './Form.module.css';

type FormProps = {
  onSubmit: (Cards: {
    moviePriority: number;
    movieTitle: string;
    movieDescription: string;
    movieWatched: boolean;
  }) => void;
};

function Form({ onSubmit }: FormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<number>(3);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      moviePriority: priority,
      movieTitle: title,
      movieDescription: description,
      movieWatched: false,
    });
    setTitle('');
    setDescription('');
    setPriority(3);
  }

  return (
    <form
      action="submit"
      className={styles.form}
      onSubmit={(event) => handleSubmit(event)}
    >
      <Textinput
        labelName={'Movie Title'}
        inputValue={title}
        setInputValue={setTitle}
      />
      <Textinput
        labelName={'Movie Description'}
        inputValue={description}
        setInputValue={setDescription}
      />
      <Priority priority={priority} setPriority={setPriority} />
      <Button />
    </form>
  );
}

export default Form;
