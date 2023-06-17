import { useApolloClient } from '@apollo/client';
import { useParams } from "react-router-dom";

import { SidePanel } from '../../../../components';
import { fragments } from '../../../../queries';

export function Production() {
  const { id } = useParams();
  const client = useApolloClient();
  const production = client.readFragment({
    id: `Film:${id}`,
    fragment: fragments.filmProduction,
  });

  if (!production) {
    return null;
  }

  const getContents = () => {
    const getProducers = (producers: string[]): JSX.Element => (
      <ul>
        {producers?.map((producer: string) => (
          <li key={producer}>{producer}</li>
        ))}
      </ul>
    )

    const contents: JSX.Element[] = []
    contents.push(<>Release Date: {production?.releaseDate}</>)
    contents.push(<>Director: {production?.director}</>)
    contents.push(<>Producers: {getProducers(production?.producers as string[])}</>)
    return contents;
  }

  return (
    <SidePanel title="Production" contents={getContents()} />
  );
}
