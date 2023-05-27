export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const GET_CHARACTERS='GET_CHARACTERS'
export const DELEATE_CHARACTER='DELEATE_CHARACTER'
export const SET_USER= 'SET_USER'




export const getCharacters = (character) => {
  return { type: 'GET_CHARACTERS', payload: character };
};




export const addFav = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const character = await response.json();
      console.log(character)
      dispatch({
        type: 'ADD_TO_MY_FAVORITES',
        payload: character
      });
  
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };
};

export const setUser = (name) => {
  return {
      type: SET_USER,
      payload: name
  }
};


export const deleateCharacter = (id) => {
  return {
    type: DELEATE_CHARACTER,
    payload: id
  };
};



export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id
  };
};

  
