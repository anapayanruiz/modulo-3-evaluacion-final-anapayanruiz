import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

  const { image, name, status, species, origin, episode } = props.character

  const iconsDetail = () => {
    if (status === 'Alive') {
      return <i class="fas fa-laugh-beam"></i>
    } else if (status === 'Dead') {
      return <i class="fas fa-skull-crossbones"></i>
    } else if (status === 'unknown') {
      return <i class="fas fa-question"></i>
    }
  };

  return (
    <div>
      <Link to='/'>
        <button className="fas fa-backward form__btn"></button>
      </Link>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <ul>
        <li>Status: {iconsDetail()}</li>
        <li>Species: {species}</li>
        <li>Origin: {origin.name}</li>
        <li>Episodes: {episode.length}</li>
      </ul>
    </div >
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
