<<<<<<< HEAD
import { useSelector } from "react-redux";
import { RootState } from "../components/Interface/InterFace";

const Resumen: React.FC = () => {
  
  const selector = useSelector((state: RootState) => state);

  const datosRegistrados = Object.entries(selector);

  return (
    <>
      <center>
        <h1>Resumen</h1>
      </center>
      {datosRegistrados.map(([key, value]) => {
        return (
          <>
            <center>
              <h1></h1>
              <table>
                <th>{key}:</th>
                <td>{value}</td>
              </table>
            </center>
          </>
        );
      })}
    </>
  );
};

=======
import { useDispatch, useSelector } from "react-redux";



const Resumen = () =>{
    const dispatch = useDispatch();    
    const selector = useSelector(state=>state);

    const datosRegistrados = Object.entries(selector);
    return(
        <>
            {
                datosRegistrados.map(([key, value])=>{
                    return(
                        <>
                           <p>{key} </p>
                            <p>{value} </p>
                            </>
                        )
                })
            }
        </>
    )
}
>>>>>>> d4705df9650092c4cf891ccd37483125ba055e1a
export default Resumen;