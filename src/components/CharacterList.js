import React from 'react';
import CharacterCard from './CharacterCard';


const CharacterList = (props) => {
  return (
    <ul className="cards">
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
};

export default CharacterList;
