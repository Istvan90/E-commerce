import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'

import { HomePage } from './components/HomePage';
import { MarketPlace } from './components/MarketPlace';
import { DetailsProduits } from './components/DetailsProduitsPage';
import { Cart } from "./components/Cart"
import { NotFound } from './components/404.jsx';

import { Store } from "./redux/store.js"

export default function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/details-produits" element={<DetailsProduits />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/user-Bag" element={<Cart />} />
          <Route path="/404-not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}