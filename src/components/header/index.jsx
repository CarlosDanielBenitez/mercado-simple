import React, { useContext, useState } from 'react';
import './style.css';
import { CartContext } from '../../context/cart-context';
import {useNavigate} from 'react-router-dom';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

 const goToCart = () =>{
    navigate('/cart');
  }

 const goToContact = () =>{
    navigate('/contact')
  }
  

  const goToHome = () =>{
    navigate('/home')
  }

  const goToAbout = () =>{
    navigate('/about')
  }

  const goToServices = () =>{
    navigate('/services')
  }

  return (
    <>
      <div className="mobile-menu">
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a onClick={goToHome}>Home</a></li>
          <li><a onClick={goToAbout}>About</a></li>
          <li><a onClick={goToServices}>Services</a></li>
          <li><a onClick={goToContact}>Contact</a></li>
          <li onClick={goToCart} className='menu-cart-container'>
            <img src="../src/img/finished-cart.png" alt="cart" className="menu-cart-image" />
            <div className="menu-cart-count-container">
              <span className="menu-cart-count">{cart.length}</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="title-principal">
        <img src="../src/img/buy.jpg" alt="App Logo" className="app-logo" />
        <h1 className="app-title">Simple - Market</h1>
      </div>
    </>
  );
}

export default MobileMenu;
