import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


const ErrorPage = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col >
        <img style={{width: '100%'}} src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp" alt="error-404" />
        </Col>
        <NavLink className={'nav-link text-center'} to="/"><h2> Vuelve al Inicio</h2></NavLink>
      </Row>
    </Container>
  )
}

export default ErrorPage