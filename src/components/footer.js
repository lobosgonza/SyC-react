import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Footer(){
return(
    <div className="bgOrangeClaro">
<Container className="paddingTop">

<Row>
<Col>

<ul>
  <li><a>Inicio</a></li>
  <li><a>Quienes Somos</a></li>
  <li><a>Servicios</a></li>
  <li><a>Contacto</a> </li>
</ul>
</Col>
<Col>
    
</Col>
<Col>
    <p>Simple y Creativo</p>
          <p>+569 659 610 86</p>
          <p>contacto@simpleycreativo.cl</p>
          <p>Santiago </p>
</Col>
</Row>
<Row>
    <Col className="text-center">
    <a>Top</a>
<p>Desarrollado Por Simple y Creativo</p>
    </Col>
</Row>

</Container>
</div>
)
}




export default Footer



