import React, { useState } from 'react';
import Cards from './components/Cards/Cards';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Counter from './components/Counter/Counter';

function App(): JSX.Element {
  const [movies, setMovies] = useState([
    {
      movieTitle: 'James Bond - Keine Zeit zu sterben',
      movieDescription:
        'James Bond ist nicht mehr als Geheimagent im Dienst und genießt seinen Ruhestand auf Jamaika. Doch seine Atempause ist nur von kurzer Dauer, denn der CIA-Agent Felix Leiter spürt Bond auf, um ihn um Hilfe zu bitten.',
      moviePriority: 4,
      movieWatched: false,
    },
    {
      movieTitle: 'Dune',
      movieDescription:
        'Feature adaptation of Frank Herbert’s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
      moviePriority: 2,
      movieWatched: true,
    },
    {
      movieTitle: 'Dune_2',
      movieDescription:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus suscipit fuga, eos iusto libero natus ab aut fugit minus amet dignissimos quos voluptatum? Modi nulla porro ex architecto praesentium?',
      moviePriority: 2,
      movieWatched: true,
    },
  ]);
  const [count, setCount] = useState<number>(0);

  function countDecrease() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  function addMovie(movie: {
    movieTitle: string;
    movieDescription: string;
    moviePriority: number;
    movieWatched: boolean;
  }) {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  function deleteMovie(movieIndex: number) {
    setMovies(movies.filter((_movie, index) => index !== movieIndex));
  }

  function handleUpdatePriority(movieTitle: string, priority: number) {
    const foundMovie = movies.map((movie) => {
      if (movie.movieTitle === movieTitle) {
        movie.moviePriority = priority;
        return movie;
      } else {
        return movie;
      }
    });
    setMovies(foundMovie);
  }

  return (
    <>
      <Title />
      <Counter
        count={count}
        Decrease={countDecrease}
        Increase={() => setCount(count + 1)}
      />
      <Form onSubmit={addMovie} />
      {movies.map((movie, index) => (
        <Cards
          key={movie.movieTitle}
          movieTitle={movie.movieTitle}
          movieDescription={movie.movieDescription}
          moviePriority={movie.moviePriority}
          movieWatched={movie.movieWatched}
          onDelete={() => {
            deleteMovie(index);
          }}
          updatePriority={handleUpdatePriority}
        />
      ))}
    </>
  );
}

export default App;
