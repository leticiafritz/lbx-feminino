import "./Footer.css"

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faInstagram,
	faFacebook,
	faBlogger,
	faTwitch,
	faYoutube,
	faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
	    <div class="social-container">
	    <h3>Fale com a gente!</h3>
	    <div className="contact-icons">
	    <a href="https://www.instagram.com/ligabrasilxadrezfeminino" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
	    <a href="https://www.facebook.com/groups/157866614403205" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
	    {/*
	    <a href="https://www.blogger.com" className="blogger social"><FontAwesomeIcon icon={faBlogger} size="2x"/></a>
	    <a href="https://www.twitch.com" className="twitch social"><FontAwesomeIcon icon={faTwitch} size="2x"/></a>
	    <a href="https://www.youtube.com" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
	    <a href="https://www.whatsapp.com" className="whatsapp social"><FontAwesomeIcon icon={faWhatsapp} size="2x"/></a>
	    */}
	    </div>
	    </div>
    )
}
