import { gql } from '../generated/gql';

const filmCharacters = gql(`
  fragment FilmCharacters on Film {
    characterConnection {
      characters {
        id
        name
        height
        mass
        species {
          name
        }
        homeworld {
          name
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasPreviousPage
        hasNextPage
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

const filmPlanets = gql(`
  fragment FilmPlanets on Film {
    planetConnection {
      planets {
        name
        terrains
        climates
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
  filmMeta,
  filmPlanets,
  filmProduction,
};