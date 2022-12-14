import './App.css';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/WatchList';
import axios from 'axios';

import { useState, useEffect } from 'react';

function App() {

const [movieList, setMovieList] = useState([]);
const [list, setList] = useState([]);
const [page, setPage] = useState(1);

const addMovie = (movie) => setList ([...list, movie]);

const removeMovie = (movie) => {
  const newState = list.filter((movie2) => {
    return movie2 !== movie;
  });
  setList(newState);
};

useEffect(() => {
const getData = () => {
  axios 
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
};

      getData();
      }, [page]);

  return (
    <div className="App">
      <Header/>

      <main>
        <MovieScreen
        movieList={movieList}
        page={page}
        setPage={setPage}
        addMovie={addMovie}
        removeMovie={removeMovie}
        list={list}
        />
        <Watchlist list={list} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
