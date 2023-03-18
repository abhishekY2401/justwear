import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ProductDetails from "./scenes/product/ProductDetail";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import ProductList from "./scenes/product/ProductListing";
import CartMenu from "./scenes/global/CartMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./scenes/global/Footer";


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
        <Home />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
