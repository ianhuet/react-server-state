import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { utils } from './utils'

import './index.css'

const cacheConfig = {
  typePolicies: {
    Film: {
      fields: {
        releaseDate: {
          read(releaseDate: string): string {
            const date = new Date(releaseDate);
            return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
          }
        },
        episodeIdNumeral: {
          read(_value: string, { readField }) {
            return utils.romanise(readField('episodeID'))
          },  
        },
      },
    },
  },
}

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(cacheConfig),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
