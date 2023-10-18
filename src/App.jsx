import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Componets/Header';
import Slider from './Componets/Slider';
import ProductionHouse from './Componets/ProductionHouse';
import GenreMovieList from './Componets/GenreMovieList';

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <div className="">
      <Header searchText={searchText} setSearchText={setSearchText} /> {/* Tambahkan prop pencarian ke Header */}
      <Slider />
      <ProductionHouse />
      <GenreMovieList searchText={searchText} /> {/* Tambahkan prop pencarian ke GenreMovieList */}
    </div>
  );
}

export default App;
