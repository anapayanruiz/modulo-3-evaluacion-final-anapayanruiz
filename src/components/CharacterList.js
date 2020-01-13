import React from 'react';
import CharacterCard from './CharacterCard';


const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return <p>Personajes no encontrados</p>
  } else {
    return (
      <ul>
        {props.characters.map(character => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
            />
          )
        })}
      </ul>
    );
  }
};

export default CharacterList;
