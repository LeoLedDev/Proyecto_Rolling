import React from 'react'
import  CarouselServ  from '../Components/CarouselServ'
import ListGroup from 'react-bootstrap/ListGroup'

const ServicePage = () => {
  return (
    <>
      <CarouselServ/>
      
      <ListGroup className='mt-2 ' >
      <ListGroup.Item className='text-center fw-bold' variant="success">Recepcion 24 horas</ListGroup.Item>
      <ListGroup.Item className='text-center fw-bold' variant="success">Desayuno buffet</ListGroup.Item>
      <ListGroup.Item className='text-center fw-bold' variant="success">Conexión Wi-Fi</ListGroup.Item>
      <ListGroup.Item className='text-center fw-bold' variant="success">Restaurant</ListGroup.Item>
      <ListGroup.Item className='text-center fw-bold' variant="success">Piscina</ListGroup.Item>
      <ListGroup.Item className='text-center fw-bold' variant="success">Gimnasio</ListGroup.Item>

      <ListGroup.Item className='text-center fw-bold' variant="success">Servicio lavanderia</ListGroup.Item>

      </ListGroup>

      
    </>

  )
}

export default ServicePage