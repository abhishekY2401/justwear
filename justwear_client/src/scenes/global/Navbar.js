import "./navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import account from "../assets/userr.svg";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [clickSearch, setClickSearch] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="navbar">
      <div className="wrapper">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
          </ul>
        </nav>
        <div className="clothy-logo">
          <span className="cloth">justwear</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          {clickSearch && (
            <input
              type="search"
              placeholder="Search Products..."
              className="search_items"
            />
          )}
        </div>

        <div className="iconss">
          <div className="search-icon">
            <img src={search} alt="search" className="search__icons" />
          </div>

          <div className="my-cart">
            <img src={cart} alt="cart" className="shop__cart" />
          </div>

          <div className="user-account">
            <img src={account} alt="user" className="user__account" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
