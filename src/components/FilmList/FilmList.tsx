import { Link } from "react-router-dom";

import { Film } from '../../generated/graphql';
import './FilmList.css';

interface Props {
  films: (Film | null)[];
}

export function FilmList(props: Props) {
  const { films } = props;

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
        {films.map((film) => {
          if (film === null) return null;

          return (
            <tr key={film.episodeID}>
              <td>{film.episodeID}</td>
              <td>{film.title}</td>
              <td>{film.releaseDate}</td>
              <td><Link to={`detail/${film.id}`}>Detail</Link></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
