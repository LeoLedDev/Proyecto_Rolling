import React from 'react'
import { Container } from 'react-bootstrap'
import  Carousel  from 'react-bootstrap/Carousel'

function CarouselHome() {
  return (
  <Container>
    <Carousel className='mt-2'>
      <Carousel.Item>
        <img src="https://cdn.tatlerasia.com/asiatatler/i/hk/2021/06/30122450-84f-yi-lounge-vip1_cover_1920x1080.jpg"  alt="Foto_De_Habitacion" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.tatlerasia.com/asiatatler/i/hk/2021/06/30122450-84f-yi-lounge-vip1_cover_1920x1080.jpg"  alt="Foto_De_Habitacion" />
        
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://cdn.tatlerasia.com/asiatatler/i/hk/2021/06/30122450-84f-yi-lounge-vip1_cover_1920x1080.jpg"  alt="Foto_De_Habitacion" />
        
      </Carousel.Item>
    </Carousel>
  </Container>
  )
}

export default CarouselHome