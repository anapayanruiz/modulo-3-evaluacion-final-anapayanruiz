import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

  const { image, name, status, species, origin, episode } = props.character

  const iconsDetail = () => {
    if (status === 'Alive') {
      return <i className="fas fa-laugh-beam"></i>
    } else if (status === 'Dead') {
      return <i className="fas fa-skull-crossbones"></i>
    } else if (status === 'unknown') {
      return <i className="fas fa-question"></i>
    }
  };

  return (
    <React.Fragment>
      <Link to='/'>
        <button className="fas fa-backward card__btn"></button>
      </Link>
      <div className="card--detail">
        <img className="card--detail__image" src={image} alt={name} />
        <h3 className="card__title">{name}</h3>
        <ul>
          <li className="card__icon">Status: {iconsDetail()}</li>
          <li className="card__text">Species: {species}</li>
          <li className="card__text">Origin: {origin.name}</li>
          <li className="card__text">Episodes: {episode.length}</li>
        </ul>
      </div >
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episode: PropTypes.string,
};

export default CharacterDetail;
