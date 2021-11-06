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
    movieId: number;
  }) => void;
};

function Form({ onSubmit }: FormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(3);
  const [id, setId] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      moviePriority: priority,
      movieTitle: title,
      movieDescription: description,
      movieWatched: false,
      movieId: id,
    });
    setTitle('');
    setDescription('');
    setPriority(3);
    setId(id + 1);
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
