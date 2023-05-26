import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Biografia=()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ValidacionBiografia=Yup.object({
        Biografia:Yup.string().required("El campo es Obligatorio"),})
        const formik=useFormik({
            initialValues:{
                Biografia:""
            },
            validationSchema:ValidacionBiografia,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                });     
                navigate("/Referencias");}
        });
return(
    <div>
        <h1>Auto Biografia</h1>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="Biografia">
                <Form.Label>Biografia</Form.Label>
                <Form.Control
                name="Biografia"
                as="textarea"
                value={formik.values.Biografia}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su Biografia"
                isInvalid={!!formik.errors.Biografia && formik.touched.Biografia}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.Biografia}
                </Form.Control.Feedback>
            </Form.Group>
                    <Button variant="primary" type="submit">Siguiente</Button>
        </Form>
    </div>
)
}
export default Biografia;