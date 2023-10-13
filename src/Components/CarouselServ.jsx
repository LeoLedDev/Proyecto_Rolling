import React from 'react'
import { Container } from 'react-bootstrap'
import  Carousel  from 'react-bootstrap/Carousel'


const CarouselServ = () => {
  return (
    <Container>
    <Carousel className='mt-2'>
      <Carousel.Item>
        <img src="https://i.pinimg.com/564x/eb/d5/49/ebd5499fc3894728806f0fd48c0ddd7b.jpg"  alt="Foto_De_Habitacion" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.pinimg.com/564x/eb/d5/49/ebd5499fc3894728806f0fd48c0ddd7b.jpg"  alt="Foto_De_Habitacion" />
        
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://i.pinimg.com/564x/eb/d5/49/ebd5499fc3894728806f0fd48c0ddd7b.jpg"  alt="Foto_De_Habitacion" />
        
      </Carousel.Item>
    </Carousel>
  </Container>

   
  )
}

export default CarouselServ