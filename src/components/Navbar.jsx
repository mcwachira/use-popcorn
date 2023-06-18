import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'
import Results from './Results'

const Navbar = ({movies}) => {
  return (
    <nav className="nav-bar">
       <Logo/>
     <SearchBar/>
   <Results movies={movies}/>
      </nav>
  )
}

export default Navbar