import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portada from "./components/portada.js";
import Navegador from "./components/navegador.js";
import Description from "./components/description.js";
import Servicio from "./components/servicio.js";
import Contacto from "./components/contacto.js";
import Footer from "./components/footer.js";



function App() {
  return (
    <>
    <Navegador/>
    <Portada/>
    <Description/>
    <Servicio/>
    <Contacto/>
    <Footer/>

  </>
  );
}

export default App;
