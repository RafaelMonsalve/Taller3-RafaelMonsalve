<<<<<<< HEAD
import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { RootSate } from "./Interface/InterFace";

const Biografia=()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state:RootSate)=>state);

    const ValidacionBiografia=Yup.object({
        Biografia:Yup.string().required("El campo es Obligatorio"),})
        const formik=useFormik({
            initialValues:{
                Biografia:selector.Biografia
            },
            validationSchema:ValidacionBiografia,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                });     
                alert('Biografia Guardada con exito');}
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
                isInvalid={!!formik.errors.Biografia && formik.touched.Biografia}
                isValid={formik.touched.Biografia && !formik.errors.Biografia}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.Biografia}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="success" type="submit">Guardar</Button>
        </Form>
    </div>
)
}
=======
import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { RootSate } from "./Interface/InterFace";

const Biografia=()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state:RootSate)=>state);

    const ValidacionBiografia=Yup.object({
        Biografia:Yup.string().required("El campo es Obligatorio"),})
        const formik=useFormik({
            initialValues:{
                Biografia:selector.Biografia
            },
            validationSchema:ValidacionBiografia,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                });     
                alert('Biografia Guardada con exito');}
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
                isInvalid={!!formik.errors.Biografia && formik.touched.Biografia}
                isValid={formik.touched.Biografia && !formik.errors.Biografia}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.Biografia}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="success" type="submit">Guardar</Button>
        </Form>
    </div>
)
}
>>>>>>> d4705df9650092c4cf891ccd37483125ba055e1a
export default Biografia;