import React, { useState } from 'react';
import Cards from './components/Cards/Cards';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  const [movies, setMovies] = useState([
    {
      movieTitle: 'James Bond - Keine Zeit zu sterben',
      movieDescription:
        'James Bond ist nicht mehr als Geheimagent im Dienst und genießt seinen Ruhestand auf Jamaika. Doch seine Atempause ist nur von kurzer Dauer, denn der CIA-Agent Felix Leiter spürt Bond auf, um ihn um Hilfe zu bitten.',
      moviePriority: 4,
      movieWatched: false,
      movieIndex: 0,
    },
    {
      movieTitle: 'Dune',
      movieDescription:
        'Feature adaptation of Frank Herbert’s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
      moviePriority: 2,
      movieWatched: true,
      movieIndex: 0,
    },
    {
      movieTitle: 'Dune 2',
      movieDescription:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus suscipit fuga, eos iusto libero natus ab aut fugit minus amet dignissimos quos voluptatum? Modi nulla porro ex architecto praesentium?',
      moviePriority: 2,
      movieWatched: true,
      movieIndex: 0,
    },
  ]);

  function addMovie(movie: {
    movieTitle: string;
    movieDescription: string;
    moviePriority: number;
    movieWatched: boolean;
    movieIndex: number;
  }) {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    return movies;
  }
  function deleteMovie(movieIndex: number) {
    setMovies(movies.filter((movie) => movie.movieIndex !== movieIndex));
  }

  return (
    <>
      <Title />
      <Form onSubmit={addMovie} />
      {movies.map((movie) => (
        <Cards
          movieTitle={movie.movieTitle}
          movieDescription={movie.movieDescription}
          moviePriority={movie.moviePriority}
          movieWatched={movie.movieWatched}
          onDelete={deleteMovie}
          movieIndex={movies.indexOf(movie)}
        />
      ))}
    </>
  );
}

export default App;
