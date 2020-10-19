import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function QuienesSomos(){
return (
    <>
   <h1 className="text-center bgOrangeClaro subtitle-box bgTexture"> ¿Quienes somos?</h1>
<Container className="text-center separacion-secciones ">
<Row>
        <p>  Somos un grupo de amigos que junto con competir por quién ocupaba la mesa para zurdos en la universidad, adquirimos conocimientos gracias a la pandemia que permitirán que tu negocio sea un éxito a través del desarrollo web. ¡Trabajemos juntos para que tu marca se vea, se escuche y funcione bien!</p>
</Row>
<Row>
    <Col >
    <img src="oscar.png" className="imgProps" alt="oscar-profile"></img>
              <h2>Oscar Tucas</h2>
    <div className="bgGray">
    <p>  <strong>Soy periodista titulado de la Universidad Adolfo Ibáñez</strong></p>
     <p>  Tengo experiencia en medios de comunicación y asesorias comunicacionles a personajes públicos (entre ellas, la de un candidato presidencial). Gracias a la cuarentena aprendí diseño y animación por lo que podemos montar un mensaje potente para tu página.</p>
     </div>
    </Col>
    <Col>
    <img src="gonza.png" className="imgProps" alt="gonza-profile"></img>
        <h2>Gonzalo Lobos</h2>
        <div className="bgGray">
    <p><strong>Ingeniero comercial y fotógrafo de profesión, titulado en la Universidad Adolfo Ibáñez y Arcos</strong></p>
    <p>Tengo experiencia en producciones fotograficas y gestión de marca, por lo que buscaré que tu idea destaque y consigas tus objetivos. </p>
    </div>
    </Col>
</Row>
<Row class="text-center ">
<Col  className="bgGray">
     
      <p>Nuestros conocimientos de cracion de marca, programacion y diseño podemos hacer que tu página web sea ventana moderna, práctica y bonita para tus clientes</p>
</Col>
</Row>

 

  </Container>
    
   </>
  
)
}

export default QuienesSomos