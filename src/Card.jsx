import React, { useState } from 'react';
import Pokemon from './Components/pokemon';
import './App.css';

const Card = () => {
  const [pokemon, setPokemon] = useState('');
  const [element, setElement] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica que los datos sean válidos
    if (pokemon.length > 3 && element.length > 3) {
      // Almacena las respuestas
      const submittedData = {pokemon, element};
      setPokemon('');
      setElement('');
      setSubmittedData(submittedData);
      setErrorMessage('');
    } else {
      // Muestra un mensaje de error
      setErrorMessage('Por favor, ingresa los datos correctamente.');
    }
  };

  return (
    <div className="card-container">
      <h2>Elige tu Pokémon favorito</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pokémon:
          <input
            type="text"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          />
        </label>
        <br />
        <label>
          Elemento:
          <input
            type="text"
            value={element}
            onChange={(e) => setElement(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {submittedData && <Pokemon favoritePokemon={submittedData.pokemon} element={submittedData.element} />}
    </div>
  );
};

export default Card;