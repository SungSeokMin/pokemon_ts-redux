import {
  PokemonDispatchType,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from '../actions/PokemonActionsTypes';

interface InitialState {
  success: boolean;
  pokemon?: PokemonType;
}

const initialState = {
  success: false,
};

const PokemonReducer = (
  state = initialState,
  action: PokemonDispatchType
): InitialState => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        ...state,
        success: false,
      };

    case POKEMON_SUCCESS:
      const { abilities, sprites } = action.payload;
      return {
        ...state,
        success: true,
        pokemon: {
          abilities,
          sprites,
        },
      };
    default:
      return state;
  }
};

export default PokemonReducer;
