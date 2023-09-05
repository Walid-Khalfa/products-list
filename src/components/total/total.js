import React from 'react';

const Total = (props) => {
  const { items } = props;

  // Calculate the total price including quantity for each item
  const total = items.reduce((accumulator, item) => {
    const itemTotal = parseFloat(item.price) * item.quantity;
    return accumulator + itemTotal;
  }, 0);

  return (
    <div>
      <p className="text">Total Price: {total.toFixed(2)}</p>
    </div>
  );
};

export default Total;
