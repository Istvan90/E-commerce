import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'

import { HomePage } from './components/HomePage';
import { MarketPlace } from './components/MarketPlace';
import { DetailsProduits } from './components/DetailsProduitsPage';
import { Cart } from "./components/Cart" 
import { Store } from "./redux/store.js"

export default function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/details-produits/:id" element={<DetailsProduits />} />
          <Route path="/user-Bag" element={<Cart />} /> 
        </Routes>
      </Router>
    </Provider>
  );
}