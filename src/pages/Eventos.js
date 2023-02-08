import React from "react";
import "../styles/Eventos.css";
import EventosItem from "../components/EventosItem";
import { EventosList } from "../helpers/EventosList";

function Eventos() {
  return (
    <div>
      <div className="eventotitle">
        <h1>Fique por dentro do que está acontecendo na LBXF</h1>
      </div>
      <div className="eventos">
        {EventosList.map((eventosItem, key) => {
          return (
            <EventosItem
              key={key}
              title={eventosItem.title}
              imageEvento={eventosItem.imageEvento}
              body={eventosItem.body}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Eventos;
