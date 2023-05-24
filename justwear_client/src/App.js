import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ProductDetails from "./scenes/product/ProductDetail";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./scenes/global/Footer";
import Products from "./scenes/product/Products";
import Category from "./scenes/home/Category";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />  
          <Route path="/products/:category" element={<Products />} />  
          <Route path="/category/:id" element={<Category />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
