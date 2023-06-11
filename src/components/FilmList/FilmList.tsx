import { Link } from "react-router-dom";

import './FilmList.css';

interface Film {
  id: string;
  title: string;
  episodeID: number;
  director: string;
  producers: string[];
  releaseDate: string;
  openingCrawl: string;
  characterConnection: {
    totalCount: number;
    characters: {
      name: string;
      species: {
        name: string;
      }
    }
  }
}

interface Props {
  films: Film[];
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
        {films.map((film) => (
          <tr key="film.episodeID">
            <td>{film.episodeID}</td>
            <td>{film.title}</td>
            <td>{film.releaseDate}</td>
            <td><Link to={`detail/${film.id}`}>Detail</Link></td>
          </tr>    
        ))}
      </tbody>
    </table>
  );
}
