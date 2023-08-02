import React, { useState, useEffect } from 'react';
import './style.css';

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

 
  const saveUserDataToLocalStorage = () => {
    const userData = {
      cardNumber,
      cardHolder,
      expiryDate,
      cvc,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

 
  const loadUserDataFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setCardNumber(userData.cardNumber);
      setCardHolder(userData.cardHolder);
      setExpiryDate(userData.expiryDate);
      setCvc(userData.cvc);
    }
  };

  useEffect(() => {
    loadUserDataFromLocalStorage();
  }, []); 

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    if (input.startsWith('4')) {
     
    } else if (input.startsWith('5')) {
    
    } else if (input.startsWith('3')) {
      
    }
    setCardNumber(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos enviados:', {
      cardNumber,
      cardHolder,
      expiryDate,
      cvc,
    });

 
    saveUserDataToLocalStorage();

  
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvc('');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19" 
          required
        />

        <label htmlFor="cardHolder">Cardholder:</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          required
        />

        <label htmlFor="expiryDate">Expiration date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          maxLength="5" 
          required
        />

        <label htmlFor="cvc">CVC:</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          maxLength="4"
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Checkout;
