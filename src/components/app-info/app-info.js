import React from 'react'
import  './app-info.css'
const AppInfo = ({allMovies,favoriteMovie}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMovies} </p>
      <p className='fs-4 text-uppercase'>Sevimli film: {favoriteMovie}</p>
    </div>
  )
}

export default AppInfo