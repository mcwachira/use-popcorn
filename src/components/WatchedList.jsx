import React from 'react'
import Summary from './Summary';
import WatchedCard from './WatchedCard';

const WatchedList = ({watched}) => {
  const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
    <div className="summary">
      <h2>Movies you watched</h2>
   <Summary avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} watched={watched}/>
    </div>



    <ul className="list">
    {watched.map((movie) => (

<WatchedCard movie={movie}/>

))}
  </ul>
  </>
  )
}

export default WatchedList