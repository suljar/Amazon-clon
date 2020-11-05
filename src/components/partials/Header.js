import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
 
  return (
    <div className="header">
      <Link to="/">
         <i className="fa fa-home" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
         
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
       
        <Link to="/checkout">
          <div className="header__optionBasket">
          <i className="fa fa-shopping-cart fa-lg"/>
            <span className="header__optionLineTwo header__basketCount">
              {0}   
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

