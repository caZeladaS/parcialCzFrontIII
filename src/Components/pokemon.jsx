import React from 'react';

const Pokemon = ({ favoritePokemon, element }) => {
  return (
    <div>
      <h2>Tu Pokémon Favorito es: </h2>
      <h1>{favoritePokemon}!!!</h1>
      <h2>y su elemento es: {element}</h2>
    </div>
  );
};

export default Pokemon;