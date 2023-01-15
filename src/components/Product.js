import React from 'react';
import Button from './Button';

const styles = {
  product: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  img: {
    width: "100%",
  }
}
class Product extends React.Component {
  render() {
    const { product, agregarAlCarro } = this.props;
    return (
      <div style={styles.product}>
        <img style={styles.img} src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => agregarAlCarro(product)}>
          Add to cart
        </Button>
      </div>
    )
  }
}

export default Product;