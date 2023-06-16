import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../../Redux/Action';
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

const Card = ({ id, name, image, status, onClose }) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPulsating, setIsPulsating] = useState(false);

  useEffect(() => {
    setIsFavorite(myFavorites.some((favorite) => favorite.id === id));
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(removeFav(id));
    } else {
      setIsFavorite(true);
      dispatch(addFav(id));
    }
  };

  const handleButtonClick = () => {
    handleFavorite();
    setIsPulsating(true);

    setTimeout(() => {
      setIsPulsating(false);
    }, 500);
  };
  
  return (
    <div className={styles.card2}>
      <div className={styles.Card}>
      <div className={styles.ident}>
        <p>{id}</p>
      </div>
    
      <div className={styles.identName}>{name}</div>
        <button className={styles.Button} onClick={() => onClose(id)}>
          Close
        </button>
        <div>
          <button
            className={`${styles.Fav} ${isFavorite ? styles.pulse : ''}`}
            onClick={handleButtonClick}
          >
            {isFavorite ? '💛' : '🤍'}
          </button>
        </div>

        <button className={styles.DetailsButton}>
          <NavLink to={`/Details/${id}`}>Details</NavLink>
        </button>


        <div className={styles.info}>
          <p>Name:</p>
          <p>{name}</p>
          <p>Status: {status}</p>
        </div>

        <img className={styles.Img} src={image} alt="name" />
      </div>
    </div>
  );
};

export default Card;
