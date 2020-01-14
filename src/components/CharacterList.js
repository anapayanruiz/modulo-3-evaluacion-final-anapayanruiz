import React from 'react';
import CharacterCard from './CharacterCard';


const CharacterList = (props) => {

  if (props.characters.length === 0) {
    return <p className="card__title">¡Ups!...los personajes encontrados no coinciden con la búsqueda</p>
  } else {
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
  }

};

export default CharacterList;
