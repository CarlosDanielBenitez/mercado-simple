import './style.css';

const Card = ({ id, image, name, category, description, price, stock, onAddToCart, onShowDetails }) => {
    return (
        <div className="card" >

            <button className='cartButtonContainer' type='button' onClick={() => onShowDetails(id)}>
                <img src={image} alt={name} className="cardImage" />
                <div className="cardContent">
                    <h3 className="cardName">{name}</h3>
                    <p className="cardCategory">{category}</p>
                    <p className="cardPrice">USD {price}</p>
                    <p className="cardDescription">{description}</p>
                    <p className="cardStock">{stock} left</p>
                </div>
            </button>

            <div className="cardActions">
                <button onClick={() => onAddToCart(id)} className="cardButton" >Add to cart</button>
            </div>
        </div>
    )
}

export default Card;