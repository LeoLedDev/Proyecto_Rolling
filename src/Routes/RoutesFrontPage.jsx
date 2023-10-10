import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import UserPage from '../pages/UserPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import AdminPage from '../pages/AdminPage'
import ErrorPage from '../pages/ErrorPage'
import NavbarH from '../components/NavbarH'
import Footer from '../components/Footer'
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
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default RoutesFrontPage
