import React from 'react';
import styles from './Cards.module.css';
import Checkbox from '../Checkbox/Checkbox';
import Priority from '../Priority/Priority';

type CardsProps = {
  movieTitle: string;
  movieDescription: string;
  moviePriority: number;
  movieWatched: boolean;
};

function Cards({
  movieTitle,
  movieDescription,
  moviePriority,
  movieWatched,
}: CardsProps): JSX.Element {
  return (
    <li className={styles.cards}>
      <h2>{movieTitle}</h2>
      <p>{movieDescription}</p>
      <Priority priority={moviePriority} />
      <Checkbox movieWatched={movieWatched} />
    </li>
  );
}

export default Cards;
