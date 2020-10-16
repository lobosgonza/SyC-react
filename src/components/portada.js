import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


function Portada(){

return(

<Container>
<Row>
    <Col>    
      <h2>¿Quieres hacer una página web para tu negocio?</h2>
          <h1> ¡Nosotros te ayudamos! </h1>
            <Button variant="outline-warning">Quienes Somos</Button>
    </Col>
    <Col>
    
        <img src="logo_250w.png"></img>
    </Col>
</Row>
</Container>

)

}

export default Portada;