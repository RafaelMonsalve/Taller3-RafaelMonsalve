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
export default Resumen;