import { gql } from '../generated/gql';

const filmCharacters = gql(`
  fragment FilmCharacters on Film {
    characterConnection {
      characters {
        name
        species {
          name
        }
      }
    }
  }
`);

const filmMeta = gql(`
  fragment FilmMeta on Film {
    id
    title
    episodeID
    episodeIdNumeral @client
    releaseDate
  }
`);

const filmProduction = gql(`
  fragment FilmProduction on Film {
    director
    producers
    releaseDate
  }
`);

export const fragments = {
  filmCharacters,
  filmMeta,
  filmProduction,
};