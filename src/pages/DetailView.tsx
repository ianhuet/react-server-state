import { useQuery } from '@apollo/client';
import { Link, useParams } from "react-router-dom";

import { Characters as CharactersPanel, Production as ProductionPanel } from '../components';
import { queries } from '../queries';

import './DetailView.css';

export function DetailView() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(queries.filmDetail, {
    variables: { id },
  });

  const film = data?.film ?? {};

  const characters = () => {
    if (!data.film) {
      return [];
    }

    return data.film?.characterConnection?.characters;
  };

  const production = () => {
    if (!data.film) {
      return {};
    }

    return {
      director: data.film.director,
      producers: data.film.producers,
      releaseDate: data.film.releaseDate,
    };
  };

  const renderDetail = () => {
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`;

    return (
      <div>
        <h1>{film?.title}</h1>
        <p>Episode #{film.episodeID}</p>

        <div className="detail">
          <pre>{film?.openingCrawl}</pre>
          <aside>
            <ProductionPanel production={production()} />
            <CharactersPanel characters={characters()} />
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
