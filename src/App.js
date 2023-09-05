import './App.css';
import React, { Component } from 'react';
import Items from './components/item/Items'; // Updated import
import AddItem from './components/addItem/AddItem'; // Updated import
import Total from './components/total/Total'; // Updated import

class App extends Component {
  state = {
    items: [
      { id: 1, product: 'Pen', price: 2, quantity: 1 },
      { id: 2, product: 'Book', price: 10, quantity: 1 },
    ],
  };

  deleteItem = (id) => {
    const items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };

  addItem = (item) => {
    // Generate a unique ID for the new item
    const newItem = {
      ...item,
      id: this.state.items.length > 0 ? this.state.items[this.state.items.length - 1].id + 1 : 1,
      quantity: 1,
    };

    const items = [...this.state.items, newItem];
    this.setState({ items });
  };

  increaseQuantity = (id) => {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    this.setState({ items });
  };

  decreaseQuantity = (id) => {
    const items = this.state.items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="container">
        <h1>Product List React App</h1>
        <div className="table">
          <Items
            items={this.state.items}
            del={this.deleteItem}
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity}
          />
          <AddItem add={this.addItem} />
          <Total items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
