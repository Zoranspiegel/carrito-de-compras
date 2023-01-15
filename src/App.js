import React from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    products: [
      { name: "Tomato", price: 1500, img: "/products/tomato.jpg" },
      { name: "Peas", price: 2500, img: "/products/peas.jpg" },
      { name: "Lettuce", price: 500, img: "/products/lettuce.jpg" },
    ],
    cart: [],
    cartVisibility: false
  }
  agregarAlCarro = (producto) => {
    if (this.state.cart.find(p => producto.name === p.name)) {
      const newCart = this.state.cart.map(p => p.name === producto.name ?
        ({ ...p, cantidad: p.cantidad + 1 })
        : p
      )
      this.setState({ cart: newCart });
    } else {
      this.setState({
        cart: [...this.state.cart, { ...producto, cantidad: 1 }]
      })
    }
  }
  showCart = () => {
    if (!this.state.cart.length) {
      return;
    }
    this.setState({ cartVisibility: !this.state.cartVisibility });
  }
  render() {
    const { cartVisibility, cart, products } = this.state;
    return (
      <div>
        <Navbar
          cart={cart}
          cartVisibility={cartVisibility}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products products={products} agregarAlCarro={this.agregarAlCarro} />
        </Layout>
      </div>
    )
  }
}

export default App;
