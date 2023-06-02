import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Style from "./Details.module.css";

const Details = () => {
  const id = useParams();
  const buscar = id.detail;
  console.log(buscar);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios(`https://localHost:3001/rickandmorty/character/${buscar}`)
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
  }, [id]);

  if (!character) {
    return <p>Cargando...</p>;
  }

  const { name, status, species, gender, origin, image } = character;

  return (
    <div className={Style.DetailsDiv}>
      <p>¡Hola, soy Details!</p>
      <img className={Style.Img} src={image} alt={name} />
      <h2>Name: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h3>Origin:</h3>
      <h2 id="pp">{origin.name}</h2>
    </div>
  );
};

export default Details;
