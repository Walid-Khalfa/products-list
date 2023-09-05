import React from 'react';

const Items = (props) => {
  const { items, del, increaseQuantity, decreaseQuantity } = props;

  const ListItem = items.length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          {/* Display quantity and buttons for increasing/decreasing */}
          <div className="quantity">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items. Try to add some.</div>
  );

  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
