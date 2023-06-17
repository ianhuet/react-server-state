import { useQuery } from '@apollo/client';
import { Link, useLoaderData, useParams } from "react-router-dom";

import { FilmMetaFragment } from '../../generated/graphql'
import { queries } from '../../queries';
import { Characters as CharactersPanel, Production as ProductionPanel } from './components';

import './DetailView.css';

export function DetailView() {
  const cache: FilmMetaFragment = useLoaderData() as FilmMetaFragment;

  const { id } = useParams();
  const { loading, error, data } = useQuery(queries.filmDetail, {
    variables: { id },
  });

  const film = {
    ...cache,
    ...data?.film,
  }

  

  const renderDetail = () => {
    if (loading) return 'Loading...'
    if (error) return `Error: ${error.message}!`;

    if (!film) return 'Film not found';

    return (
      <div className="detail">
        <pre>{film?.openingCrawl}</pre>
        <aside>
          <ProductionPanel />
          <CharactersPanel />
        </aside>
      </div>
    );
  };

  return (
    <div className="film">
      <p><Link to="/">Back to List</Link></p>

      <hr/>

      <div>
        <h1>{film?.title}</h1>
        <h5>Episode {film?.episodeIdNumeral}</h5>

        {renderDetail()}
      </div>
    </div>
  );
}
