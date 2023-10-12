import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const AboutPage = () => {
  return (
    <>
     <div className="container mt-2">
      <div className="row py-2">
      <Col sm={6}  md={6}>
          <Image src="https://i.pinimg.com/736x/ae/ca/bb/aecabbb80f83af71ad05737e2ae2a483.jpg" thumbnail />
        </Col>
        <div className="col-sm-12 col-md-6 py-2">
          <h2>Hola somo Giuliana y Leonel compañeros del cursado, que creo este maravilloso Hotel California. Pensado y estructurado con un aspecto muy familiar para que se sientan como en sus propias casas, teniendo sus comodidades con cachivaches y distracciones. Aqui encontraras las mejores excursiones y atención que llegaras a pensar que es un sueño hecho realidad. Nuestra misión es que lleven un hermoso recuerdo del Hotel California y que nos sigan eligiendo.</h2>
        </div>
      </div>
     </div>
    </>

  )
}

export default AboutPage