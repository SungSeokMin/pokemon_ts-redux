import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootReducerType } from './Store';
import { fetchPokemonData } from './actions/PokemonActions';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const pokemonReducer = useSelector(
    (state: RootReducerType) => state.PokemonReducer
  );
  const dispatch = useDispatch();

  const handlePokemonName = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const searchButtonTapped = () => {
    dispatch(fetchPokemonData(pokemonName));
  };
  return (
    <div className="App">
      <input
        type="text"
        value={pokemonName}
        onChange={handlePokemonName}
        onKeyPress={(event) => event.key === 'Enter' && searchButtonTapped()}
      />
      <button onClick={searchButtonTapped}>포켓몬 찾기</button>

      {pokemonReducer.success && (
        <div>
          <p>{pokemonName}</p>
          {pokemonReducer.pokemon?.abilities.map((ability) => {
            return (
              <div>
                <p>{ability.ability.name}</p>
                <p>{ability.slot}</p>
              </div>
            );
          })}
          <img
            src={pokemonReducer.pokemon?.sprites.front_default}
            alt="포켓몬"
          />
        </div>
      )}
    </div>
  );
}

export default App;
