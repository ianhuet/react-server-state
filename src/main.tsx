import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

const cacheConfig = {
  // typePolicies: {
  //   allFilms: {
  //     fields: {
  //       name: {
  //         read(name = "UNKNOWN NAME") {
  //           return name;
  //         }
  //       },
  //     },
  //   },
  // },
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
