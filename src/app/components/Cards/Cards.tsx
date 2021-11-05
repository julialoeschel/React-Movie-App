import React from 'react';
import styles from './Cards.module.css';

type CardsProps = {
  movieTitle: string;
  movieDescription: string;
};

function Cards({ movieTitle, movieDescription }: CardsProps): JSX.Element {
  return (
    <li className={styles.cards}>
      <h2>{movieTitle}</h2>
      <p>{movieDescription}</p>
    </li>
  );
}

export default Cards;
