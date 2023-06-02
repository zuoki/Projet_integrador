export const initialState = {
  characters:[],
  myFavorites: [],
  user:'',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return { ...state, characters: [...state.characters,action.payload] };

    case 'GET_STORE_NAME':
      return {
        ...state,
        storeName: action.payload
      };
      case 'DELEATE_CHARACTER':
        const charToRemove = action.payload;
        const uploadChar = state.characters.filter(char => char.id !== charToRemove);
        return {
          ...state,
          characters: uploadChar};

    case 'ADD_TO_MY_FAVORITES':
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      };

      case 'SET_USER': {
        return {
            ...state,
            user: payload
        }
    }

    case 'REMOVE_FAV':
      const idToRemove = action.payload;
      const updatedFavorites = state.myFavorites.filter(fav => fav.id !== idToRemove);
      return {
        ...state,
        myFavorites: updatedFavorites
      };

    default:
      return state;
  }
};

export default rootReducer;


