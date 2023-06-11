import type { Production } from '../../queries/types';
import './Production.css';

interface Props {
  production: Production
}

export function Production(props: Props) {
  const { production } = props;

  return (
    <div className="production">
      <h3>Production</h3>
      <ul>
        <li>Release Date: {production?.releaseDate}</li>
        <li>Director: {production?.director}</li>
        <li>Producers:
          <ul>
            {production.producers?.map((producer) => (
              <li key={producer}>{producer}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
