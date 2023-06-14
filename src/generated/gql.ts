/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment FilmCharacters on Film {\n    characterConnection {\n      characters {\n        name\n        species {\n          name\n        }\n      }\n    }\n  }\n": types.FilmCharactersFragmentDoc,
    "\n  fragment FilmProduction on Film {\n    director\n    producers\n    releaseDate\n  }\n": types.FilmProductionFragmentDoc,
    "\n  query FilmDetail($id: ID) {\n    film(id: $id) {\n      id\n      title\n      episodeID\n      openingCrawl\n      ...FilmCharacters\n      ...FilmProduction\n    }\n  }\n": types.FilmDetailDocument,
    "\n  query AllFilms {\n    allFilms {\n      films {\n        id\n        title\n        episodeID\n        releaseDate\n      }\n    }\n  }\n": types.AllFilmsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FilmCharacters on Film {\n    characterConnection {\n      characters {\n        name\n        species {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FilmCharacters on Film {\n    characterConnection {\n      characters {\n        name\n        species {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FilmProduction on Film {\n    director\n    producers\n    releaseDate\n  }\n"): (typeof documents)["\n  fragment FilmProduction on Film {\n    director\n    producers\n    releaseDate\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FilmDetail($id: ID) {\n    film(id: $id) {\n      id\n      title\n      episodeID\n      openingCrawl\n      ...FilmCharacters\n      ...FilmProduction\n    }\n  }\n"): (typeof documents)["\n  query FilmDetail($id: ID) {\n    film(id: $id) {\n      id\n      title\n      episodeID\n      openingCrawl\n      ...FilmCharacters\n      ...FilmProduction\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllFilms {\n    allFilms {\n      films {\n        id\n        title\n        episodeID\n        releaseDate\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllFilms {\n    allFilms {\n      films {\n        id\n        title\n        episodeID\n        releaseDate\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;