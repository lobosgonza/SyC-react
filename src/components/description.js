import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'



function Description (){

return(
<div>
<Container>
    <Row className="separacion-secciones">
        <Col >
        <Media>
<Media.Body>
  <img src="recurso1.png" alt="taza-img"></img>
     </Media.Body>
        
<div className="align-self-center mr-3 container">
      <h2>Sentémonos a conversar</h2>
      <p>Co-construyamos tu página web para que se adapte a lo que necesites.</p>
      <p>Ofecemos un servicio profesional acorde a las necesidades de tu marca para que pondamos generar la mejor ventana hacia tus clientes. </p>
     
</div>
    
     </Media>
        </Col>
    </Row>
       <Row className="separacion-secciones">
       <Media>
<div className="align-self-center mr-3 container">
             <h2>Un montón de ideas</h2>
      <p>Echemos a volar la imaginacion para que <strong>tu idea</strong> pueda concretarse en tu <strong>página web</strong></p>
      <p>Ofrecemos un trabajo profesional y acorde a tus gustos</p>
<Button variant="outline-warning">Nuestros servicios</Button>
</div>
           <Media.Body>
             <img src="recurso2.png" alt="taza-img"></img>
           </Media.Body>
       </Media>
        <Col>
   


        </Col>
    </Row>
</Container>

</div>

)
}


export default Description;