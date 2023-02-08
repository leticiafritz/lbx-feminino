import React from "react";

function EventosItem({title, imageEvento, body}) {
  return (
    <div className="eventosItem">
      <div className="image-container">
        <img src={imageEvento} alt=''/>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div className="btn">
          <button>
            <a>
              Ver mais
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventosItem;