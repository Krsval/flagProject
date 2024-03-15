import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="country-page">
      <Link className="go-back-button" to="/">
        <img className="arrow-left" src="/assets/arrow-left.svg" alt="back" />
        BACK
      </Link>
      <h1 className="country-info">
       Could not find that country!
      </h1>
    </div>
  )
}

export default PageNotFound