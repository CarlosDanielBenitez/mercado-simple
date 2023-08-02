import './style.css';

const Counter = ({ counter, onDecrementCounter, onIncrementCounter, isValueCounter }) => {


    return (

        <div className="productsCard">
            <h2 className="card__title">Contador</h2>
            <div className="card__contador">
                <button type="button" className="card__btn" onClick={onDecrementCounter} disabled={!isValueCounter}>-</button>
                <p className="card__total" >{counter}</p>
                <button type="button" className="card__btn" onClick={onIncrementCounter}>+</button>
            </div>

        </div>


    )
}
export default Counter