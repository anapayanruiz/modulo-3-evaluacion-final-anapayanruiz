import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CharacterCard = (props) => {



  const { id, name, image, species } = props.character

  const icon = () => {
    if (species === 'Human') {
      return (
        <i className="fas fa-smile-beam"></i>
      )
    } else if (species === 'Alien') {
      return (
        <i className="fab fa-reddit-alien"></i>)
    }
  };

  const route = `/character/${id}`;

  return (
    <li>
      <Link to={route}>
        <img src={image} alt={name} />
      </Link>
      <Link to={route}>
        <h3>{name}</h3>
      </Link>
      <Link to={route}>
        <p>{icon()}</p>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};


export default CharacterCard;
