
import  Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import userSchemaContacto from '../helpers/validationSchemaContacto';
import { Container } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <>
      <Formik
        initialValues={{ nombre: '', email: '', fono: '', motivo: '', tarea: '' }}
        validationSchema={userSchemaContacto}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          
            
                <Container className='mt-3 py-3'>
                <Form>
                  
                  <h5>Contacta con nosotros</h5>
                  <hr />
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" name='nombre' value={values.nombre} className={errors.nombre && touched.nombre && errors.nombre && 'is-invalid'} onChange={handleChange} maxLength={30} />
                    <small className='text-danger'>{errors.nombre && touched.nombre && errors.nombre}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="correo" name='email' value={values.email} className={errors.email && touched.email && errors.email && 'is-invalid'} onChange={handleChange} maxLength={30} />
                    <small className='text-danger'>{errors.email && touched.email && errors.email}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" name='fono' value={values.fono} className={errors.fono && touched.fono && errors.fono && 'is-invalid'} onChange={handleChange} minLength={10}/>
                    <small className='text-danger'>{errors.fono && touched.fono && errors.fono}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" name='motivo' value={values.motivo} className={errors.motivo && touched.motivo && errors.motivo && 'is-invalid'} onChange={handleChange} maxLength={18} />
                    <small className='text-danger'>{errors.motivo && touched.motivo && errors.motivo}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea5">
                    <Form.Label>Mensaje o asunto</Form.Label>
                    <Form.Control as="textarea" rows={3} name='tarea' value={values.tarea} className={errors.tarea && touched.tarea && errors.tarea && 'is-invalid'} onChange={handleChange} maxLength={150} />
                    <small className='text-danger'>{errors.tarea && touched.tarea && errors.tarea}</small>
                  </Form.Group>

                  <Button className='w-100 my-3' type='submit' onClick={handleSubmit} >Enviar</Button>
                  <hr />


                </Form>
                </Container>


           
          
        )}
      </Formik>
    </>
  )
}

export default ContactPage