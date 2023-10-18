import React, { useState } from 'react';
import GenresList from '../Constant/GenresList';
import MovieList from './MovieList';

function GenreMovieList({ searchText }) {
  const [filteredGenres, setFilteredGenres] = useState(GenresList.genere.slice(0, 5)); // Menampilkan 5 genre pertama

  const filterGenres = () => {
    if (searchText) {
      const filtered = GenresList.genere.filter((genre) =>
        genre.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredGenres(filtered);
    } else {
      setFilteredGenres(GenresList.genere.slice(0, 5));
    }
  };

  // Memanggil filterGenres setiap kali searchText berubah
  React.useEffect(() => {
    filterGenres();
  }, [searchText]);

  return (
    <div>
      {filteredGenres.map((item, index) => (
        <div className='p-8 px-8 md:px-16' key={item.id}>
          <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
          <MovieList genreId={item.id} index_={index} searchText={searchText} />
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
