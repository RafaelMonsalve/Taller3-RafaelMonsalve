import { useSelector } from "react-redux";
import { RootState5 } from "../Interface/InterFace5";

const Biografia=()=>{
    const  {Biografia}  = useSelector(
        (state: RootState5) => state.Texto
      );
  return (
    <>
      <h2>Biografía</h2>
      <p>{Biografia}</p>
    </>
  );
};
export default Biografia;