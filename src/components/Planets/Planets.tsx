import { useApolloClient } from '@apollo/client';
import { useParams } from "react-router-dom";

import { SidePanel } from '../../components';
import { Planet } from '../../generated/graphql';
import { fragments } from '../../queries';
import { utils } from '../../utils'

export function Planets() {
  const { id } = useParams();
  const client = useApolloClient();
  const cache = client.readFragment({
    id: `Film:${id}`,
    fragment: fragments.filmPlanets,
  });
  const planets = cache?.planetConnection?.planets;

  if (!planets) {
    return null;
  }

  const getContents = () => {
    const planetsSortedByName = utils.sortObjArray<Planet>(planets, 'name')
    return planetsSortedByName.reduce((acc, planet) => {
      if (!planet) return acc

      acc.push(<>{planet.name}</>)
      return acc;
    }, [])
  }
  
  return (
    <SidePanel title="Planets" contents={getContents()} />
  );
}
