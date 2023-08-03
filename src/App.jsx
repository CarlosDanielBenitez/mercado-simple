import "./App.css"
import MobileMenu from "./components/header";
import { CartProvider } from "./context/cart-context";
import Router from "./navigation"

function App() {
  return (
    <>
      <CartProvider>
        <MobileMenu />
        <Router />
      </CartProvider>
    </>
  );
}

export default App;
