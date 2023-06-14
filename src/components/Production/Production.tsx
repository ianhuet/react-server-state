import { useApolloClient } from '@apollo/client';
import { useParams } from "react-router-dom";

import { fragments } from '../../queries';
import './Production.css';

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

  return (
    <div className="production">
      <h3>Production</h3>
      <ul>
        <li>Release Date: {production?.releaseDate}</li>
        <li>Director: {production?.director}</li>
        <li>Producers:
          <ul>
            {production?.producers?.map((producer) => (
              <li key={producer}>{producer}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
