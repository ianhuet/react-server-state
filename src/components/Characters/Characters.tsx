import { useApolloClient } from '@apollo/client';
import { useParams } from "react-router-dom";

import { Person } from '../../generated/graphql';
import { fragments } from '../../queries';

import './Characters.css';

export function Characters() {
  const { id } = useParams();
  const client = useApolloClient();
  const result = client.readFragment({
    id: `Film:${id}`,
    fragment: fragments.filmCharacters,
  });
  const characters = result?.characterConnection?.characters;

  if (!characters) {
    return null;
  }

  const sortedCharacters = () => {
    const tmp = [...characters];
    return tmp.sort((a,b) => {
      if (a?.name > b?.name) return 1;
      if (b?.name > a?.name) return -1;
      return 0;
    });
  };

  const characterLabel = (character: Person): string => {
    const species = character?.species?.name ? ` (${character.species.name})` : '';
    return `${character.name} ${species}`;
  }
  
  return (
    <div className="characters">
      <h3>Characters</h3>
      <ul>
        {sortedCharacters().map((character, index) => {
          if (!character) return null;

          return (
            <li key={index}>{characterLabel(character)}</li>
          );
        })}
      </ul>
    </div>
  );
}
