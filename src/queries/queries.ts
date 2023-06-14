import { gql } from '../generated/gql';

const filmDetail = gql(`
  query FilmDetail($id: ID) {
    film(id: $id) {
      id
      title
      episodeID
      openingCrawl
      ...FilmCharacters
      ...FilmProduction
    }
  }
`);

const listFilms = gql(`
  query AllFilms {
    allFilms {
      films {
        id
        title
        episodeID
        releaseDate
      }
    }
  }
`);

export const queries = {
  filmDetail,
  listFilms,
};
