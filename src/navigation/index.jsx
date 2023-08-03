import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AboutSection from "../pages/about";
import Services from "../pages/services";
import ProductDetail from "../pages/product-detail";
import { Cart } from "../pages/cart";
import Contact from "../pages/contact";
import Checkout from "../pages/checkout";
import { SuccessOrder } from "../pages/success-order";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/about" element={<AboutSection />}> </Route>
            <Route path="/services" element={<Services />}> </Route>
            <Route path="/products/:productId" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/success-order" element={<SuccessOrder />}></Route>
        </Routes>
    );
}

export default Router;