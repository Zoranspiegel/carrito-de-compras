import React from 'react';

const styles = {
  cartDetails: {
    backgoundColor: "#fff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgba(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    display: "flex",
    listStyleType: "none",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  }
}
class CartDetails extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map((p, i) => <li key={i} style={styles.product}>
            <img src={p.img} alt={p.name} width="50px" height="32px" />
            {p.name} <span>{p.cantidad}</span>
          </li>)}
        </ul>
      </div>
    )
  }
}

export default CartDetails;