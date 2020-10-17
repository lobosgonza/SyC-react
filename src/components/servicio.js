import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



function Servicio(){
return (
  
    <Container className="separacion-secciones">
  <Row>
  <Col  className="text-center">

      <h1 >¡Que tu idea luzca!</h1>
     
</Col>
 </Row>

  
  <Row>
   <Col>
 <h3 className="text-center" >Diseño de páginas web</h3>

      <ul>
        <li>Creación de plataforma acorde a la identidad de marca.</li>
        <li>Programación de un sitio web personalizado.</li>
        <li> <strong>Sitio web amigable y responsivo </strong>para teléfonos celulares y computadores.</li>
        <li>Capacitación al cliente para la autogestión de la plataforma.</li>
        <li> Integración de tu página Web con tus <strong>redes sociales</strong>.</li>
      </ul>
   </Col>
   
   <Col>
 <h3 className="text-center">Diseño de marcas </h3>
      <ul>
        <li>Creación y proyección de la identidad de la marca.</li>
        <li><strong>Diseño de logotipos</strong> acorde a las necesidades del cliente.</li>
        <li>Diseño de <strong>Slogan</strong></li>
        <li>Generación de piezas gráficas para espacios publicitarios</li>
      </ul>
   </Col> 
</Row>

<Row>
<Col className="text-center">
      <h3>Este servicio incluye un dominio .CL vía “Nic Chile”
  y un servidor web dedicado para tu sitio.</h3>
  <Button variant="outline-warning" size="lg">Cotiza con Nosotros</Button>
</Col>
  </Row>

</Container>


)
}

export default Servicio;