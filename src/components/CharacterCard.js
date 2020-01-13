import React from 'react';
import { Link } from 'react-router-dom';


const CharacterCard = (props) => {

  const { id, name, image, species } = props.character

  const route = `/character/${id}`;

  return (
    <div>
      <Link to={route}>
        <img src={image} alt={name} />
      </Link>
      <Link to={route}>
        <h3>{name}</h3>
      </Link>
      <Link to={route}>
        <p>{species}</p>
      </Link>
    </div>
  );
}

export default CharacterCard;
