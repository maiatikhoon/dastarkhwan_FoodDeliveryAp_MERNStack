import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../Header.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const user = localStorage.getItem("user");

  const handleChangeMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className={menu ? "nav-bar expand" : "nav-bar"}>
            <div className={menu ? "nav-1 visible" : "nav-1"}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              {user && (
                <NavLink to="/food" className="nav-link">
                  Foods
                </NavLink>
              )}
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </div> 

        <div className="nav-2">
          {user && (
            <div className="cart-icon">
              <NavLink to="/cart" className="nav-link cart-link">
                  Cart {" "}
              </NavLink>
            </div>
          )}
          <button className="menu" onClick={handleChangeMenu}>
            {menu ? <CloseIcon className="text-black" /> : <MenuIcon />}
          </button>
        </div> 


      </nav>
    </div>
  );
}

export default Header;
