import { useApolloClient } from '@apollo/client';
import { RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { DetailView, ListView } from './pages';
import { fragments } from './queries';

import './App.css'

function App() {
  const client = useApolloClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/detail/:id"
          element={<DetailView />}
          loader={({ params }) => {
            return client.readFragment({
              id: `Film:${params.id}`,
              fragment: fragments.filmMeta,
            })
          }}
        />      
        <Route path="/" element={<ListView />} />
      </>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App
