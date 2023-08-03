import React, { useContext, useEffect, useMemo, useState } from 'react';
import './style.css';
import { CartContext } from '../../context/cart-context';
import { firebaseServices } from '../../servicios/firebase';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const Checkout = () => {

  const initialFormData = {
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const { cart, total, setCart } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(null);
  const { state } = useLocation();
  let query = useQuery();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);

  const onHandlerOrder = async () => {
    const newOrder = {
      buyer: {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      createdAt: new Date(),
      item: cart,
      payment: {
        currency: 'USD',
        method: 'USD',
        type: 'CASH',
      },
      seller: {
        id: 1,
        name: 'Tesla',
        phone: '114567989',
        email: 'tesla@gmail.com',
      },
      shipping: {
        deliveryDate: new Date() + 7,
        trackingNumber: '233aabb332',
        type: 'DELIVERY',
      },
      total: total,
    }
    const orderId = await firebaseServices.createOrder(newOrder)
    await firebaseServices.updateCart(state?.cartId)

    return {
      orderId
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { orderId } = await onHandlerOrder();
    setOrderCreated(orderId)
  };

  useEffect(() => {
    const cartId = query.get("cartId")

    if (query.get('cartId')) {
      const getCart = async () => {
        const cart = await firebaseServices.getCartById(cartId)
        return cart
      }

      getCart()
        .then((cart) => {
          setCart(cart.items)
        })
        .catch((error) => {
          console.log({ error });
        })
    }

  }, [query])

  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Civil Status:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Checkout;
