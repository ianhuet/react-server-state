import { gql } from '@apollo/client';

const filmDetail = gql`
  query FilmDetail($id: ID) {
    film(id: $id) {
      id
      title
      episodeID
      director
      producers
      releaseDate
      openingCrawl
      characterConnection {
        characters {
          name
          species {
            name
          }
        }
      }
    }
  }
`;

const listFilms = gql`
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
`;

export const queries = {
  filmDetail,
  listFilms,
};
