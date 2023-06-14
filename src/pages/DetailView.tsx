import { useQuery } from '@apollo/client';
import { Link, useParams } from "react-router-dom";

import { Characters as CharactersPanel, Production as ProductionPanel } from '../components';
// import type { Film } from '../generated/graphql';
import { queries } from '../queries';

import './DetailView.css';

export function DetailView() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(queries.filmDetail, {
    variables: { id },
  });

  const renderDetail = () => {
    if (loading) return 'Loading...'
    if (error) return `Error: ${error.message}!`;

    const film = data?.film;
    if (!film) return 'Film not found';

    return (
      <div>
        <h1>{film?.title}</h1>
        <h5>Episode #{film.episodeID}</h5>

        <div className="detail">
          <pre>{film?.openingCrawl}</pre>
          <aside>
            <ProductionPanel />
            <CharactersPanel />
          </aside>
        </div>
      </div>
    );
  };

  return (
    <div className="film">
      <p><Link to="/">Back to List</Link></p>

      <hr/>

      {renderDetail()}
    </div>
  );
}
