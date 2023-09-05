import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    product: '',
    price: '',
    quantity: 1, // Initialize quantity to 1
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleQuantityChange = (e) => {
    // Ensure the quantity is a positive integer
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity) && quantity >= 1) {
      this.setState({ quantity });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Pass the entire state object to the add function
    this.props.add(this.state);
    this.setState({
      product: '',
      price: '',
      quantity: 1, // Reset quantity to 1
    });
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            id="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            id="price"
            onChange={this.handleChange}
            required
          />
          {/* Add input field for quantity */}
          <input
            type="number"
            value={this.state.quantity}
            placeholder="Enter Quantity"
            id="quantity"
            onChange={this.handleQuantityChange}
            min="1" // Ensure quantity is positive
            required
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
