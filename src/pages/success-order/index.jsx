import { useLocation } from "react-router-dom"
import "./style.css"
export const SuccessOrder = () => {
    const location = useLocation();
    const {orderId} = location.state;

  return (
    <div>
        <h2>successOrder</h2>
        <p>Order Id: {orderId}</p>
    </div>
  )
}
