import type { Character } from '../queries/types';

import './Characters.css';

interface Props {
  characters: Character[],
}

export function Characters(props: Props) {
  const { characters } = props;

  const sortedCharacters = (characters) => {
    if (!characters) {
      return [];
    }
    
    const tmp = [...props.characters];
    return tmp.sort((a,b) => {
      if (a?.name > b?.name) return 1;
      if (b?.name > a?.name) return -1;
      return 0;
    });
  };

  const characterLabel = (character): string => {
    const species = character?.species?.name ? ` (${character.species.name})` : '';
    return `${character.name} ${species}`;
  }
  
  return (
    <div className="characters">
      <h3>Characters</h3>
      <ul>
        {sortedCharacters(characters).map((character, index) => (
          <li key={index}>{characterLabel(character)}</li>
        ))}
      </ul>
    </div>
  );
}
