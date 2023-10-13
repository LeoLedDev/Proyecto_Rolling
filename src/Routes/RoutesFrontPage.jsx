import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import UserPage from '../Pages/UserPage'
import ProductPage from '../Pages/ProductPage'
import CartPage from '../Pages/CartPage'
import AdminPage from '../Pages/AdminPage'
import ErrorPage from '../Pages/ErrorPage'
import NavbarH from '../Components/NavbarH'
import Footer from '../Components/Footer'
import ServicePage from '../Pages/ServicePage'
const RoutesFrontPage = () => {
  return (
    <>
    <NavbarH />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/user' element={<UserPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default RoutesFrontPage
