import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { DetailView } from '../pages/DetailView';
import { ListView } from '../pages/ListView';

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