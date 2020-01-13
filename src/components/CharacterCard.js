import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CharacterCard = (props) => {

  const { id, name, image, species } = props.character

  const iconCard = () => {
    if (species === 'Human') {
      return <i className="fas fa-user-alt"></i>
    } else if (species === 'Alien') {
      return <i className="fas fa-hand-spock"></i>
    }
  };

  const route = `/character/${id}`;

  return (
    <li className="card">
      <Link to={route}>
        <img className="card__image" src={image} alt={name} />
      </Link>
      <Link to={route}>
        <h3 className="card__title">{name}</h3>
      </Link>
      <Link to={route}>
        <p className="card__icon">{iconCard()}</p>
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
