// ./src/pages/test-page.js
import React from 'react'
import Link from 'gatsby-link'

const TestPage = () => (
  <div>
    <h1>Hello JakartaJS!</h1>
    <p>This is an example custom page for Gatsby.</p>
    <p>You can access this at http://localhost:8000/test-page.</p>
    <Link to="/">Go back home</Link>
  </div>
)

export default TestPage