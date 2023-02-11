import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt=''/>
        <div className="title-navbar">
          <div className="bigWords">
            <NavLink exact activeClassName="active" to="/"> <b>LBXF</b> </NavLink>
          </div>
          <div className="lowWords">
            <p className="title-navbar">Liga Brasileira de</p>
            <p className="title-navbar">Xadrez Feminino</p>
          </div>
        </div>
        <div className="hiddenLinks">
          <NavLink exact activeClassName="active" to="/sobre"> Sobre </NavLink>
          <NavLink exact activeClassName="active" to="/integrantes"> Integrantes </NavLink>
          <NavLink exact activeClassName="active" to="/eventos"> Eventos </NavLink>
          <NavLink exact activeClassName="active" to="/calendario"> Calendario </NavLink>
          <NavLink exact activeClassName="active" to="/textos"> Textos </NavLink>
          <NavLink exact activeClassName="active" to="/contato"> Contato </NavLink>
        </div>
      </div>
      <div className="rightSide">
        <div className="pagesevent">
          <NavLink exact activeClassName="active" to="/sobre"> Sobre </NavLink>
        </div>
        <div className="pagesevent">
          <NavLink exact activeClassName="active" to="/integrantes"> 
         
            Integrantes 
            
            </NavLink></div>
        <div className="pagesevent">
          <NavLink exact activeClassName="active" to="/eventos"> Eventos </NavLink>
        </div>
        <div className="pagesevent">
          <NavLink exact activeClassName="active" to="/calendario"> Calendario </NavLink>
        </div>
        <div className="pagesevent">
          <NavLink exact activeClassName="active" to="/textos"> Textos </NavLink>
        </div>
        <div className="pagesevent">
          <NavLink exact activeClassName="active" to="/contato"> Contato </NavLink>
        </div>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;