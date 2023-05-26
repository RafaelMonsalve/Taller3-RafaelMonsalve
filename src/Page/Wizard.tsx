
import Formulario from "../components/Paso1";
import Ocupacion from "../components/Paso2";
import Profesion from "../components/Paso3";
import Biografia from "../components/Paso4";
import Referencias from "../components/Paso5";

const Wizard = () =>{
    return(
        <div>
            <h2>Wizard</h2>
            <Formulario />
            {/*<<Profesion/>
            <Biografia/>
            <Referencias/>
            <Ocupacion />*/}
        </div>
    )
}
export default Wizard;