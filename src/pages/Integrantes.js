import * as React from 'react';
import IntegrantesItem from "../components/IntegrantesItem";
import { IntegrantesList } from "../helpers/IntegrantesList";
import "../styles/Integrantes.css";

function Integrantes() {

  return (
    <div>
      <div className="integrantestitle">
        <h1>Voluntárias</h1>
      </div>
      <div className="integrantes">
        {IntegrantesList.map((integrantesItem, key) => {
          return (
            <IntegrantesItem
              key={key}
              title=<b>{integrantesItem.title}</b>
              imageVoluntaria={integrantesItem.imageVoluntaria}
              regiao=<b>{integrantesItem.regiao}</b>
              body={integrantesItem.body}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Integrantes