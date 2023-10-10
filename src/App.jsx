import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import RoutesFrontPage from './routes/RoutesFrontPage'

const App = () => {
  return (
<>
<Router>
  <h1>Hola</h1>
  <RoutesFrontPage />
</Router>
</>
  )
}

export default App