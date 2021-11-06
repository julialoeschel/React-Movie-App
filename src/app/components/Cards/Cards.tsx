import React from 'react';
import styles from './Cards.module.css';
import Checkbox from '../Checkbox/Checkbox';
import Priority from '../Priority/Priority';

type CardsProps = {
  movieTitle: string;
  movieDescription: string;
  moviePriority: number;
  movieWatched: boolean;
  movieId: number;
  onDelete: (movieId: number) => void;
};

function Cards({
  movieTitle,
  movieDescription,
  moviePriority,
  movieWatched,
  movieId,
  onDelete,
}: CardsProps): JSX.Element {
  return (
    <li className={styles.cards}>
      <h2>{movieTitle}</h2>
      <p>{movieDescription}</p>
      <Priority priority={moviePriority} setPriority={moviePriority} />
      <Checkbox movieWatched={movieWatched} />
      <svg
        onClick={() => onDelete(movieId)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
      </svg>
    </li>
  );
}

export default Cards;
