import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Style from "./Details.module.css";

const Details = () => {
  const navigate = useNavigate();
  const { detail } = useParams();
  const buscar = detail;
  console.log(buscar);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${buscar}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos del personaje:", error);
        window.alert("Ocurrió un error al obtener los datos del personaje");
      });
  }, [buscar]);

  if (!character) {
    return <p>Cargando...</p>;
  }

  const handleToFav = () => {
    navigate("/Fav");
  };

  const { name, status, species, gender, origin, image, location } = character;

  return (
    <div className={Style.DetailsDiv}>
      <div className={Style.licence}></div>

      <img className={Style.Img} src={image} alt={name} />
      <div className={Style.info}>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin:</p>
        <p id="pp">{origin.name}</p>
      </div>

      <button className={Style.Buttoon} onClick={handleToFav}>
        back
      </button>
    </div>
  );
};

export default Details;
