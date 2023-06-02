import { BrowserRouter,Route,Routes } from "react-router-dom"
import Wizard from "./Page/Wizard";
import Resumen from "./Page/Resumen";
import FinApp from "./Page/FinApp";
import Formulario from "./components/Paso1";
import Ocupacion from "./components/Paso2";
import Profesion from "./components/Paso3";
import Biografia from "./components/Paso4";
import Referencias from "./components/Paso5";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'



class  App extends React.Component {
  render(){
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Wizard/>}/>
      <Route path="/resumen" element={<Resumen/>}/>
      <Route path="/FinApp" element={<FinApp/>}/>
      <Route path="/Formulario" element={<Formulario/>}/>
      <Route path="/Ocupacion" element={<Ocupacion/>}/>
      <Route path="/Profesion" element={<Profesion/>}/>
      <Route path="/Biografia" element={<Biografia/>}/>
      <Route path="/Referencias" element={<Referencias/>}/>
    </Routes>
   </BrowserRouter>
       )
  }
}

export default App
