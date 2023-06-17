import { useApolloClient } from '@apollo/client';
import { Link } from "react-router-dom";

import { Film } from '../../generated/graphql';
import { queries } from '../../queries'
import { utils } from '../../utils'
import './FilmList.css';

export function FilmList() {
  const client = useApolloClient();
  const result = client.readQuery({
    query: queries.listFilms,
  });

  const films = result?.allFilms?.films
  if (!films) return 'No films found'

  const filmsSortedByEpisodeId = utils.sortObjArray<Film>(films, 'episodeID')
  return (
    <table className="film-list">
      <thead>
        <tr>
          <td>Episode</td>
          <td>Title</td>
          <td>Release Date</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {filmsSortedByEpisodeId.map((film) => {
          if (film === null) return null;

          return (
            <tr key={film.episodeID}>
              <td>{film?.episodeID}</td>
              <td>{film?.title}</td>
              <td>{film?.releaseDate}</td>
              <td><Link to={`detail/${film.id}`}>Detail</Link></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
