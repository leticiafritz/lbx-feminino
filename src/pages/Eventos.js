import React from "react";
import { EventosList } from "../helpers/EventosList";
import EventosItem from "../components/EventosItem";
import "../styles/Eventos.css";

function Eventos() {
  return (
    <div className="eventos">
      <h1 className="eventosTitle">Nossos Eventos</h1>
      <div className="eventosList">
        {EventosList.map((eventosItem, key) => {
          return (
            <EventosItem
              key={key}
              image={eventosItem.image}
              name={eventosItem.name}
              price={eventosItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Eventos;
