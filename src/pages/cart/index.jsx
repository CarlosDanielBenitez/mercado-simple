import { useContext } from 'react';

import './style.css';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';
import { firebaseServices } from '../../servicios/firebase';


export const Cart = () => {
    const navigate = useNavigate();
    const { cart, onAddToCart, onDecreaseItem, onRemoveItem, total, getTotalItemQuantity } = useContext(CartContext);

    const onHandlerCreateCart = async () => {
        const newCart = {
            buyer: {
                id: 1,
            },
            items: cart,
            createdAt: new Date(),
            total: total,
            status: 'pending',
        }
        const cartId = await firebaseServices.createCart(newCart)
        return cartId;
    }
    const onHandlerCheckout = async () => {
        const cartId = await onHandlerCreateCart()
        navigate('/checkout', { state: { cartId: cartId.id } })
    }

    return (
        <>
            <div className="cartContainer">
                <h2>Cart</h2>
                {cart.length === 0 && <h3>Cart is empty</h3>}
                {
                    cart?.length > 0 && cart.map((product) => (
                        <div key={product.id} className="cartItem">

                            <div className="cartImageContainer">
                                <img src={product.image} alt={product.name} className="cardImage" />
                            </div>

                            <div className="cartContentContainer">
                                <p className="cartProductName">{product.name}</p>
                                <p className="cartPrice">USD {product.price}</p>
                                <p className="cartQuantity">Quantity:{product.quantity}</p>
                                <p className="cartStock">{product.stock} left</p>
                                <div className="cartActions">
                                    <button onClick={() => onAddToCart(product.id)} className="cartButtonAdd">+</button>
                                    <button onClick={() => onDecreaseItem(product.id)} className="cartButtonDecrease">-</button>
                                    <button onClick={() => onRemoveItem(product.id)} className="cartButtonRemove">Remove</button>
                                </div>
                            </div>

                        </div>
                    ))
                }
                {
                    cart?.length > 0 &&
                    (
                        <div className="cartActions cartTotalContainer">
                            <p className="cartTotal"> Total: USD {total}</p>
                            <p className="cartItemQuantity">Total Items: {getTotalItemQuantity()}</p>
                            <button onClick={onHandlerCheckout} className="cartButtonCheckout">Checkout</button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
