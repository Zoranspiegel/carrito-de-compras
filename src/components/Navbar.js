import React from 'react';
import Cart from './Cart';
import Logo from './Logo';

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgba(0,0,0,0.1)"
  }
}
class Navbar extends React.Component {
  render() {
    const { cart, showCart, cartVisibility } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Cart
          cart={cart}
          showCart={showCart}
          cartVisibility={cartVisibility}
        />
      </nav>
    )
  }
}

export default Navbar;