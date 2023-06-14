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

const filmProduction = gql(`
  fragment FilmProduction on Film {
    director
    producers
    releaseDate
  }
`);

export const fragments = {
  filmCharacters,
  filmProduction,
};