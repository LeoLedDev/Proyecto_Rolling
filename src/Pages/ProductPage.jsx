import React, { useEffect, useState} from 'react'
import CardBody  from 'react-bootstrap/CardBody';
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'


const ProductPage = () => {
const params = useParams()
const [product, setProduct] = useState({})
const token = localStorage.getItem('token')

const getOneProduct =async () => 
{
  const res = await fetch(`https://fakestoreapi.com/products/2`)
  const response = await res.json()
  console.log(response)
  setProduct(response)
}

const handleClick = () => {
  if (!token){
    location.href='/login'
  } else {
    alert('estas logueado')
  }
}

useEffect(() => {
  getOneProduct()
}, [])



return (
  <Card style={{ width: '100%' }}>
  <div className='text-center mt-5'>
  <Card.Img variant="top" src= {product.image} style={{width: '20%'}} />
  <Card.Body>
    <Card.Title> {product.title} </Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Button className='success' onClick={handleClick}>Reservar</Button>
    
  </Card.Body>
  </div>
    </Card>
  )
}

export default ProductPage