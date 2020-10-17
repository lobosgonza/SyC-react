import React from "react"
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



function Contacto(){
return(
    <>
    <Container>
        <Form>

        <Form.Group controlId="name">
        
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Esteban Valencia"/>
        </Form.Group>

         <Form.Group controlId="numero">
               <Form.Label>Teléfono de contacto</Form.Label>
        <Form.Control type="number" placeholder="+569 25432187" />
         </Form.Group>
        
         <Form.Group controlId="email">
               <Form.Label>Mail</Form.Label>
       <Form.Control type="email" placeholder="Email" />
         </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>¿En qué te podemos ayudar?</Form.Label>
         <Form.Control as="textarea" rows={3} placeholder="Cuéntanos sobre tu idea o proyecto. Te contactaremos a la brevedad." />
        </Form.Group>

        <Button variant="primary" type="submit">
    Enviar
  </Button>
    </Form>
   </Container>


    </>
)
}
export default Contacto;