import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

  const { image, name, status, species, origin, episode } = props.character


  return (
    <div>
      <Link to='/'>
        <button className="fas fa-backward form__btn"></button>
      </Link>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Origin: {origin.name}</li>
        <li>Episodes: {episode.length}</li>
      </ul>
    </div >
  );
}

export default CharacterDetail;
