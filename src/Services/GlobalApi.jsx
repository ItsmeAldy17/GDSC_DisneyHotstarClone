import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='bdfba4e4d4ba0ed7b00419eea5d7eaee'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=bdfba4e4d4ba0ed7b00419eea5d7eaee';

//https://api.themoviedb.org/3/trending/all/day?api_key=bdfba4e4d4ba0ed7b00419eea5d7eaee
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}