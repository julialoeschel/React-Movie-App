import React from 'react';
import styles from './Cards.module.css';
import Checkbox from '../Checkbox/Checkbox';

type CardsProps = {
  movieTitle: string;
  movieDescription: string;
  movieWatched: boolean;
};

function Cards({
  movieTitle,
  movieDescription,
  movieWatched,
}: CardsProps): JSX.Element {
  return (
    <li className={styles.cards}>
      <h2>{movieTitle}</h2>
      <p>{movieDescription}</p>
      <Checkbox movieWatched={movieWatched} />
    </li>
  );
}

export default Cards;
