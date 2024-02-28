// src/components/Pokemon.js
import React from 'react';

const Pokemon = ({ favoritePokemon, element }) => {
  return (
    <div>
      <h2>Tu Pokémon Favorito</h2>
      <p>
        <strong>Pokémon:</strong> {favoritePokemon}
      </p>
      <p>
        <strong>Elemento:</strong> {element}
      </p>
    </div>
  );
};

export default Pokemon;