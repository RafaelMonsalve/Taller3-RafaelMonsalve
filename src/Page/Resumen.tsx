import { useDispatch, useSelector } from "react-redux";



const Resumen = () =>{
    const dispatch = useDispatch();    
    const selector = useSelector(state=>state);

    const datosRegistrados = Object.entries(selector);
    return(
        <div>
            {
                datosRegistrados.map(([key, value])=>{
                    return(
                        <div key={key}>
                            <h3>{key}</h3>
                            <p>{value}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Resumen;