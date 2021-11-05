import React, { useState } from 'react';

import Cards from './components/Cards/Cards';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [movies] = useState([
    {
      movieTitle: 'James Bond - Keine Zeit zu sterben',
      movieDescription:
        'James Bond ist nicht mehr als Geheimagent im Dienst und genießt seinen Ruhestand auf Jamaika. Doch seine Atempause ist nur von kurzer Dauer, denn der CIA-Agent Felix Leiter spürt Bond auf, um ihn um Hilfe zu bitten.',
      movieWatched: false,
    },
    {
      movieTitle: 'Dune',
      movieDescription:
        'Feature adaptation of Frank Herbert’s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
      movieWatched: true,
    },
  ]);

  return (
    <>
      <Title />
      {movies.map((movie) => (
        <Cards
          movieTitle={movie.movieTitle}
          movieDescription={movie.movieDescription}
          movieWatched={movie.movieWatched}
        />
      ))}
    </>
  );
}

export default App;
