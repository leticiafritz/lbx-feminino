import React from "react";

function EventosItem({ image, name, price }) {
  return (
    <div className="eventosItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default EventosItem;