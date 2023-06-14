import { useApolloClient } from '@apollo/client';
import { useParams } from "react-router-dom";

import { SidePanel } from '../../../../components';
import { Person } from '../../../../generated/graphql';
import { fragments } from '../../../../queries';
import { utils } from '../../../../utils'

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

  const characterLabel = (character: Person): string => {
    const species = character?.species?.name ? ` (${character.species.name})` : '';
    return `${character.name} ${species}`;
  }

  const getContents = () => {
    const charactersSortedByName = utils.sortObjArray<Person>(characters, 'name')
    return charactersSortedByName.reduce((acc, character) => {
      if (!character) return acc

      acc.push(<>{characterLabel(character)}</>)
      return acc;
    }, [])
  }
  
  return (
    <SidePanel title="Characters" contents={getContents()} />
  );
}
