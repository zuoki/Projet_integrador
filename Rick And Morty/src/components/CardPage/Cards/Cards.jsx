import Card from './Card/Card';
import Style from './Cards.module.css'
import React from 'react';


const Cards = ( {characters}) => {
   if (!characters || !Array.isArray(characters)) {
     return null;
   }

   return (
     <div className={Style.Cards}>
       {characters.map(({ id, name, species, gender, image, origin, status,onClose}) => (
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

export default Cards;
