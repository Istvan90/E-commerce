import { useEffect, useState } from 'react'
import { Header } from './components/Header/HeaderPart';
import { GarrantieBar } from './components/Header/Garanti';
import { Collection } from './components/Collection/CollectionPart';

export default function App() {
  return (
    <div>
      <Header />
      <GarrantieBar />
      <Collection />
    </div>
  );
}