import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({ addMovie, movieList, page, setPage, list, removeMovie}) => {

const decrement = () => {
    setPage = (page(-1 ))
}

const increment = () => {
    setPage = +1
}

const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard movie={movie} addmovie={addMovie} page={page} setPage={setPage} list={list} removeMovie={removeMovie}/>;
});
return (
    <div className="page">
        <h1> Danny's Movie Theatre</h1>
        <h3>Add a movie to your watchlist</h3>
        <div className="btn-container">
            <button>Previous</button>
            <button>Next</button>
        </div>   
        <div className="movie-container">
            {movieDisplay}
        </div>
    </div>
);
};

export default MovieScreen;