import React from "react";

function ProductItem({ title, price }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>₹{price}</p>
    </div>
  );
}

export default ProductItem;

<ProductItem title="Laptop" price={55000} />