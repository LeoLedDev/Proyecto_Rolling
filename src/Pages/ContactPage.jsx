
import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const ContactPage = () => {
  return (
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje O Asunto</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
    </Form>
    <Button variant="success" size="lg">Enviar Mensaje</Button>{' '}
    </Container>
  )
}

export default ContactPage