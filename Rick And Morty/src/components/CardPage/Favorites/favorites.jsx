import React from 'react';
import { useSelector } from 'react-redux';
import style from './favorites.module.css';
import Card from '../Cards/Card/Card';

const Favorites = () => {
  const char = useSelector((state) => state.myFavorites);
console.log(char)
  return (
    <div className={style.Fav}>
      {char.map(({ id, name, species, gender, image, origin, status, onClose }) => (
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          origin={origin.name}
          status={status}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default Favorites;
