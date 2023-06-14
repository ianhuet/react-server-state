import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { DetailView, ListView } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/" element={<ListView />} />
      </Routes>
    </BrowserRouter>
  );
}