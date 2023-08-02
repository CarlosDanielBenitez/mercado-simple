import "./App.css"
import { Route, Routes } from "react-router-dom";
import MobileMenu from "./components/header";
import Home from "./pages/home"
import ProductDetail from "./pages/product-detail";
import { CartProvider } from "./context/cart-context";
import { Cart } from "./pages/cart";
import Contact from "./pages/contact";
import AboutSection from "./pages/about";
import Services from "./pages/services";
import Checkout from "./pages/checkout";


function App() {
  return (
    <>

      <CartProvider>
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<AboutSection />}> </Route>
          <Route path="/services" element={<Services />}> </Route>
          <Route path="/products/:productId" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>

      </CartProvider>
    </>
  );
}

export default App;
