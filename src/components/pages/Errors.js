import React from 'react'
import { Link } from 'react-router-dom'

export const Errors = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Page not exist</p>
        <Link to="/init">Back to home</Link>
    </div>
  )
}
