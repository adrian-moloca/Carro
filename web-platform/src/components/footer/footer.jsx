import React from 'react'
import IconButton from '@material-ui/core/IconButton';

import facebook from "../../assets/icon/facebookIcon.png"
import instagram from "../../assets/icon/instagramIcon.png"
import twitter from "../../assets/icon/twitterIcon.png"
import { Link } from "react-router-dom";
import './footerStyle'

const Footer = () => { 
  return (
    <div className="footer">
      <div className="sbd-footer-media-buttons">
        <IconButton
            edge="start"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <img src={facebook} alt=""/>
        </IconButton>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <img src={instagram} alt=""/> 
        </IconButton>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <img src={twitter} alt=""/>
        </IconButton>
      </div>
      <div className="sbd-footer-separation-border"></div>
      <div className="container footer-container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/how-works"><p>Cum functioneaza</p></Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/contact"><p>Contact</p></Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>Cariera</p></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/about"><p>Despre noi</p></Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link ><p>Termeni si conditii</p></Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>Aplicatie pentru mobil</p></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>Intrebari frecvente</p></Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>Presa</p></Link> 
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>De ce sa folosesti serviciile noastre</p></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>Noutati si planuri de viitor</p></Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>Recenzii</p></Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Link to="/"><p>Vouchere</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
