import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState(''); // Tambahkan state searchText
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [searchText]); // Perbarui daftar film saat searchText berubah

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      const filteredMovies = resp.data.results.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      ); // Filter film berdasarkan searchText

      setMovieList(filteredMovies);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      getMovieByGenreId(); // Panggil fungsi pencarian saat Enter ditekan
    }
  };

  return (
    <div className='relative'>
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'
        }`}
      />

      <input
        type='text'
        placeholder='Search...'
        className='p-2 border border-gray-300 rounded-md'
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleSearch} // Tangani pencarian saat Enter ditekan
      />

      <div
        ref={elementRef}
        className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
          index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'
        }`}
      />
    </div>
  );
}

export default MovieList;
