import React from 'react';


const CharacterDetail = (props) => {

  console.log(props.character.episode);

  const { name, status, species, origin, episode } = props.character


  return (
    <div>
      <img />
      <h3>{name}</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Origin: {origin.name}</li>
        <li>Episodes: {episode.length}</li>
      </ul>
    </div>
  );
}

export default CharacterDetail;
