import Container from 'react-bootstrap/Container';
import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Link } from "react-router-dom"

import "react-bootstrap-submenu/dist/index.css";


const Topbar = () => {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Change language to English
    </Tooltip>
  );
    return (

    <Navbar fixed="top" expand="lg"  style={{backgroundColor: "#ff8906"}}>
    <Container className="fs-5">
      <Navbar.Brand className="fs-4"><Link className = "link" to="/">JolieJoueurs</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/#mission" className="mx-1">Notre Mission</Nav.Link>
          <NavDropdown title="Nos Équipes" className="mx-1" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link className = "link" to="/dota2">Dota 2 </Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link className = "link" to="/league">League of Legends</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link className = "link" to="/overwatch">Overwatch</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className = "link" to="/valorant">Valorant </Link></NavDropdown.Item>
            <NavDropdown.Item ><Link className = "link" to="/smash">Super Smash Bros </Link></NavDropdown.Item>
            <NavDropdown.Item ><Link className = "link" to="/rocketleague">Rocket League </Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/#teams">
              Sauter au Section
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/#contact" className="mx-1">Contactez Nous</Nav.Link>
          <Nav.Link href="/#join" className="mx-1" >Rejoignez une Équipe</Nav.Link>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 500, hide: 400 }}
            overlay={renderTooltip}
          >
          <Nav.Link className="mx-1" > <Link className = "link" to="/en">
          <i class="bi bi-globe2"></i> En </Link></Nav.Link>
          </OverlayTrigger>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
 
export default Topbar;

