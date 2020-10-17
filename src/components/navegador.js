import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




function Navegador (){
return(
<Navbar bg="dark" variant="dark">
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