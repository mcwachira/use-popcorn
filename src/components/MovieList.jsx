import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({setIsOpen1, isOpen1, movies}) => {
  return (
    <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen1((open) => !open)}
    >
      {isOpen1 ? "–" : "+"}
    </button>
    {isOpen1 && (
      <ul className="list">
        {movies?.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </ul>
    )}
  </div>
  )
}

export default MovieList