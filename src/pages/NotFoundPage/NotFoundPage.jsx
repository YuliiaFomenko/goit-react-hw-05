import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to='/'>
        Go back to Home Page
      </Link>
    </div>
  )
}

export default NotFoundPage