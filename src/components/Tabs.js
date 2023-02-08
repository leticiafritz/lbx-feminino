import React, { useState } from 'react'
import "../styles/Tabs.css";

function Tabs() {
const[index, setIndex] = useState(0);
  return(
    <div className="Tabs">
      <div className="tabsList">
        <div className={`tabHead ${index===0? 'active':null}`} onClick={()=>{setIndex(0)}}> Missão </div>
        <div className={`tabHead ${index===1? 'active':null}`} onClick={()=>{setIndex(1)}}> Visão </div>
        <div className={`tabHead ${index===2? 'active':null}`} onClick={()=>{setIndex(2)}}> Valores </div>
      </div>
      <div className="tabContant" hidden={index !== 0}>
        Missão: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="tabContant" hidden={index !== 1}>
        Visão: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="tabContant" hidden={index !== 2}>
        Valores: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  )
}

export default Tabs;