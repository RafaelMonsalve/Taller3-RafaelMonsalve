import { createContext } from "react";
import { Provider } from "react-redux";
import store from "../../store/Store";

interface ResumenContextType {
  Resumen: number; // Asegúrate de que el tipo de 'Resumen' coincida con tus necesidades
}

const ResumenContext = createContext<ResumenContextType | undefined>(undefined);

export { ResumenContext };

// En tu componente principal:
const App = () => {
  const resumenValue = {
    Resumen: "", // Define el valor inicial de Resumen según tus necesidades
  };

  return (
    <Provider store={store}>
      <ResumenContext.Provider value={resumenValue}>
        {/* Resto de tu aplicación */}
      </ResumenContext.Provider>
    </Provider>
  );
};

export default App;