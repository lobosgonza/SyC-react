import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Navegador (){

const [state, setState] = useState("bgTransparent");


 function listenScrollEvent (e) {
    if (window.scrollY > 50) {
      setState( "bgGray scrolledAnimate" );
   
    } else {
      setState("bgTransparent");
    
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

return (
<Navbar className={state} fixed="top" variant="dark">
    <Navbar.Brand href="#home">
      <img className="img-nav" src="icono-nav.svg"/>
      Simple y Creativo
    </Navbar.Brand>
    
 <Navbar.Collapse className="justify-content-end">

    <Nav className="justify-content-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Quienes Somos</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
)
}

export default Navegador;