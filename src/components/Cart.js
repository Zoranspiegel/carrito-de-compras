import React from 'react';
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

const styles = {
  cart: {
    cursor: "pointer",
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px"
  },
  bubble: {
    position: "relative",
    left: "12px",
    top: "20px"
  }
}
class Cart extends React.Component {
  render() {
    const { cart, cartVisibility, showCart } = this.props;
    const cantidad = cart.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad > 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={showCart} style={styles.cart}>
          Cart
        </button>
        {cartVisibility ? <CartDetails cart={cart} /> : null}
      </div>
    )
  }
}

export default Cart;