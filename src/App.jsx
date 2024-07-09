import { useEffect, useState } from 'react'

import { HomePage } from './components/HomePage';
import { MarketPlace } from './components/MarketPlace';
import { DetailsProduits } from './components/DetailsProduitsPage';

export default function App() {
  return (
    <>
      {/*<HomePage />
      <MarketPlace/>*/}
      <DetailsProduits />
    </>
  );
}