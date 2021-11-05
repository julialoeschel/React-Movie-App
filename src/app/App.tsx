import React, { useState } from 'react';
import Cards from './components/Cards/Cards';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  const [movies] = useState([
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
  ]);

  return (
    <>
      <Title />
      <Form />
      {movies.map((movie) => (
        <Cards
          movieTitle={movie.movieTitle}
          movieDescription={movie.movieDescription}
          moviePriority={movie.moviePriority}
          movieWatched={movie.movieWatched}
        />
      ))}
    </>
  );
}

export default App;
