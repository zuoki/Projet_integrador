import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleateCharacter, getCharacters } from '../Redux/Action';
import Style from './CardsPage.module.css';
import Cards from '../CardPage/Cards/Cards';
import Header from '../Header/Header';

function CardsPage() {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(deleateCharacter(id));
  };

  const randomAdd = () => {
    const id = Math.floor(Math.random() * 827);
    const characterExists = characters.some((character) => character.id == id);
    
    if (characterExists) {
      window.alert('¡Este personaje ya está en la lista!');
      return;
    }
  
    axios(`https://localHost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          data.onClose = onClose;
          console.log(data)
          dispatch(getCharacters({ ...data }));
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        window.alert('¡Error al obtener los datos del personaje!');
        console.error(error);
      });
  };

  const onSearch = (id) => {
    const characterExists = characters.some((character) => character.id == id);
    
    if (characterExists) {
      window.alert('¡Este personaje ya está en la lista!');
      return;
    }
  
    axios(`https://localHost:3001/4}`)
      .then(({ data }) => {
        if (data.name) {
          console.log(data)
          data.onClose = onClose;
          dispatch(getCharacters({ ...data }));
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        window.alert('¡Error al obtener los datos del personaje!');
        console.error(error);
      });
  };
  
  
  

  return (
    <div className={Style.App}>
      <Header onSearch={onSearch} randomAdd={randomAdd} />
      <Cards characters={characters} />
    </div>
  );
}

export default CardsPage;

