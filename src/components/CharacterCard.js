import React from 'react';


const CharacterCard = (props) => {
  console.log(props.character.species);

  const { name, image, species } = props.character

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{species}</p>
    </div>
  );
}

export default CharacterCard;
