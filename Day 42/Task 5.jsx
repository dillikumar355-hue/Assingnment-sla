import React from "react";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      {children}
    </div>
  );
}

export default Card;


<Card>
  <h3>Title</h3>
  <p>This is inside the card</p>
</Card>