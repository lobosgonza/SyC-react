import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function QuienesSomos(){
return (
    <>
   <h1 className="text-center"> ¿Quienes somos?</h1>
<Container>
<Row>
        <p>  Somos un grupo de amigos que junto con competir por quién ocupaba la mesa para zurdos en la universidad, adquirimos conocimientos gracias a la pandemia que permitirán que tu negocio sea un éxito a través del desarrollo web. ¡Trabajemos juntos para que tu marca se vea, se escuche y funcione bien!</p>
</Row>
<Row>
    <Col>
              <h2>Oscar Tucas</h2>
    <p>  <strong>Soy periodista titulado de la Universidad Adolfo Ibáñez</strong>Tengo experiencia en medios de comunicación y asesorias comunicacionles a personajes públicos (entre ellas, la de un candidato presidencial). Gracias a la cuarentena aprendí diseño y animación por lo que podemos montar un mensaje potente para tu página.</p>
    </Col>
    <Col>
        <h2>Gonzalo Lobos</h2>
    <p><strong>Ingeniero comercial y fotógrafo de profesión, titulado en la Universidad Adolfo Ibáñez y Arcos</strong>Tengo experiencia en producciones fotograficas y gestión de marca, por lo que buscaré que tu idea destaque y consigas tus objetivos. </p>
    </Col>
</Row>
<Row class="text-center">
     
      <p>Nuestros conocimientos de cracion de marca, programacion y diseño podemos hacer que tu página web sea ventana moderna, práctica y bonita para tus clientes</p>
      <p>Conoce mas detalles de nuestro servicio</p>

</Row>

 

  </Container>
    
   </>
  
)
}

export default QuienesSomos