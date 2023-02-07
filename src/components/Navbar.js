import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {Link} from "react-router-dom";
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
        <img src={Logo} />
        <div className="title-navbar">
          <div className="bigWords">
            <Link to="/"> <b>LBXF</b> </Link>
          </div>
          <div className="lowWords">
            <p className="title-navbar">Liga Brasileira de</p>
            <p className="title-navbar">Xadrez Feminino</p>
          </div>
        </div>
        <div className="hiddenLinks">
          <Link to="/sobre"> Sobre </Link>
          <Link to="/integrantes"> Integrantes </Link>
          <Link to="/eventos"> Eventos </Link>
          <Link to="/calendario"> Calendario </Link>
          <Link to="/textos"> Textos </Link>
          <Link to="/contato"> Contato </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/sobre"> Sobre </Link>
        <Link to="/integrantes"> Integrantes </Link>
        <Link to="/eventos"> Eventos </Link>
        <Link to="/calendario"> Calendario </Link>
        <Link to="/textos"> Textos </Link>
        <Link to="/contato"> Contato </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;