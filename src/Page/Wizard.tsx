<<<<<<< HEAD
import React, { useState } from "react";
import Formulario from "../components/Paso1";
import Ocupacion from "../components/Paso2";
import Profesion from "../components/Paso3";
import Biografia from "../components/Paso4";
import Referencias from "../components/Paso5";
import {Button} from "react-bootstrap";
import Resumen from "./Resumen";

interface WizardProps {
  children: React.ReactNode;
}

const Wizard: React.FC<WizardProps> = ({ children }) => {
  const [activePage, setActivePage] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePage];

  return (
    <div className="wizard">
      <div className="wizard_content">{currentPage}</div>
      <div className="wizard-buttons">
        <Button
          variant="dark"
          onClick={() => setActivePage(activePage - 1)}
          disabled={activePage === 0}
        >
          Anterior
        </Button>
        <Button
          variant="primary"
          onClick={() => setActivePage(activePage + 1)}
          disabled={activePage === pages.length - 1}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Wizard>
      <Formulario />
      <Ocupacion />
      <Profesion />
      <Biografia />
      <Referencias/>
      <Resumen/>
      
    </Wizard>
  );
}
=======
import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Formulario from "../components/Paso1";
import Ocupacion from "../components/Paso2";
import Profesion from "../components/Paso3";
import Biografia from "../components/Paso4";
import Referencias from "../components/Paso5";
import {Button} from "react-bootstrap";
import Resumen from "./Resumen";

interface WizardProps {
  children: React.ReactNode;
}

const Wizard: React.FC<WizardProps> = ({ children }) => {
  const [activePage, setActivePage] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePage];

  return (
    <div className="wizard">
      <div className="wizard_content">{currentPage}</div>
      <div className="wizard-buttons">
        <Button
          variant="dark"
          onClick={() => setActivePage(activePage - 1)}
          disabled={activePage === 0}
        >
          Anterior
        </Button>
        <Button
          variant="primary"
          onClick={() => setActivePage(activePage + 1)}
          disabled={activePage === pages.length - 1}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

const Page1 = () => <h1>Page1</h1>;
const Page2 = () => <h1>Page2</h1>;
const Page3 = () => <h1>Page3</h1>;
const Page4 = () => <h1>Page4</h1>;
const Page5 = () => <h1>Page5</h1>;

export default function App() {
  return (
    <Wizard>
      <Formulario />
      <Ocupacion />
      <Profesion />
      <Biografia />
      <Referencias/>
      <Resumen/>
      
    </Wizard>
  );
}
>>>>>>> d4705df9650092c4cf891ccd37483125ba055e1a
