import React from 'react';
import NavBar from '../src/components/NavBar/NavBar.jsx';
import Contactame from './components/Contactame/Contactame.jsx';
import Derechos from './components/Derechos/Derechos.jsx';
import Header from './components/Header/Header.jsx';
import SobreMi from './components/SobreMi/SobreMi.jsx';
import Tecnologias from './components/Tecnologias/Tecnologias.jsx';
import Trabajos from './components/Trabajos/Trabajos.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <SobreMi />
      <Tecnologias />
      <Trabajos />
      <Contactame />
      <Derechos />
    </>
  );
}

export default App;
