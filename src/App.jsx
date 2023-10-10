import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import RoutesFrontPage from './routes/RoutesFrontPage'
import Footer from './components/Footer'

const App = () => {
  return (
<>
<Router>
  <h1>Hola</h1>
  <RoutesFrontPage />
  <Footer/>
</Router>
</>
  )
}

export default App