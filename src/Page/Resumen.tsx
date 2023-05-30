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

export default Resumen;