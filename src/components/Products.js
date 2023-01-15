import React from 'react';
import Product from './Product';

const styles = {
  products: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
}
class Products extends React.Component {
  render() {
    const { products, agregarAlCarro } = this.props;
    return (
      <div style={styles.products}>
        {products.map((product, i) => <Product
          key={i}
          agregarAlCarro={agregarAlCarro}
          product={product}
        />)}
      </div>
    )
  }
}

export default Products;