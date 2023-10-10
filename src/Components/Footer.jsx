import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {
  return (
  <>
   
    <footer className="footer">
        <div className="container mt-2">
            <div className="row text-center py-2">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <NavLink to="/*"></NavLink>

                    <h5 className="text-white">Hotel California</h5>
                    <h5 className="text-white">Av. Aconquija 534</h5>
                   
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <h5 className="text-white">Redes</h5>
                    <NavLink to="/*" className="nav-link text-white">Facebook</NavLink>
                    <NavLink to="/*" className="nav-link text-white ">Instagram</NavLink>
                    <NavLink to="/*" className="nav-link text-white">Twitter</NavLink>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                <h5 className="text-white">Contacto</h5>
                <h5 className="text-white">hotelcalifornia@gmail.com</h5>
                <h5 className="text-white">Tel: 3815235689</h5>
                            
                    
                </div>
            </div >
        </div >
    </footer >

  </>
  )
}

export default Footer
