import { Component } from "react";

// Import Components
import UpperNavbar from "./UpperNavbar/UpperNavbar";
import MiddleNavbar from "./MiddleNavbar/MiddleNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

import classes from "./Navbar.module.scss";

export class Navbar extends Component {
  render() {
    const { onToggleSidebar, onSearch, cartItems, toggleCart } = this.props;

    return (
      <header className={classes.navbar}>
        <UpperNavbar onToggleSidebar={onToggleSidebar} />
        <MiddleNavbar
          onSearch={onSearch}
          cartItems={cartItems}
          toggleCart={toggleCart}
          onToggleSidebar={onToggleSidebar}
        />
        <BottomNavbar />
        <BreadCrumb />
      </header>
    );
  }
}

export default Navbar;
