import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'


function Portada(){

return(
    <div className=" bgImg ">
    <div className="opacity50">
<Container className="sectionSpace ">
<Row >
    <Col className="centerDiv" > 
<Media >
<div className="align-self-center mr-3 text-center">
      <h2>¿Quieres hacer una página web para tu negocio?</h2>
          <h1> ¡Nosotros te ayudamos! </h1>
            <Button className="btnStyle" size="lg">Quienes Somos</Button>
    </div>
<Media.Body>
        <img src="logo_250w.png"  ></img>
   </Media.Body>
 
 </Media> 
    </Col>
</Row>
</Container>
</div>
</div>
)

}

export default Portada;