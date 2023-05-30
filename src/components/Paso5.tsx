import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootSate } from "./Interface/InterFace";

const Referencias=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const selector=useSelector((state:RootSate)=>state)
    const ValidacionReferencia=Yup.object({
        nombre3:Yup.string().required("El nombre es obligatorio"),
        apellido3:Yup.string().required("El apellido es obligatorio"),
        email3:Yup.string().email("El email no es valido").required("El email es obligatorio"),
        telefono3:Yup.number().required("El telefono es obligatorio").test('len','El numero no debe mayor de 10 y no menor que 7',val=>{
            const len = val.toString().length;
             return len >=7 && len <=10;
        }),
        nombre2:Yup.string().required("El nombre es obligatorio"),
        apellido2:Yup.string().required("El apellido es obligatorio"),
        email2:Yup.string().email("El email no es valido").required("El email es obligatorio"),
        telefono2:Yup.number().required("El telefono es obligatorio").test('len','El numero no debe mayor de 10 y no menor que 7',val=>{
            const len = val.toString().length;
             return len >=7 && len <=10;
        }),})
        const formik=useFormik({
            initialValues:{
                nombre3:selector.nombre3,
                apellido3:selector.apellido3,
                email3:selector.email3,
                telefono3:selector.telefono3,
                nombre2:selector.nombre2,
                apellido2:selector.apellido2,
                email2:selector.email2,
                telefono2:selector.telefono2,
            },
            validationSchema:ValidacionReferencia,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                });
                alert("Referencias Guardadas con Exito");
            }
        });
return(
    <div>
        <h6>Referencia N°1</h6>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="nombre3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                name="nombre3"
                type="text"
                value={formik.values.nombre3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Nombre"
                isInvalid={!!formik.errors.nombre3 && formik.touched.nombre3}
                isValid={formik.touched.nombre3 && !formik.errors.nombre3}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.nombre3}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="apellido3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                name="apellido3"
                type="text"
                value={formik.values.apellido3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Apellido"
                isInvalid={!!formik.errors.apellido3 && formik.touched.apellido3}
                isValid={formik.touched.apellido3 && !formik.errors.apellido3}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.apellido3}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                name="email3"
                type="email"
                value={formik.values.email3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Email"
                isInvalid={!!formik.errors.email3 && formik.touched.email3}
                isValid={formik.touched.email3 && !formik.errors.email3}/>
                <Form.Control.Feedback type="invalid">
                {formik.errors.email3}
                </Form.Control.Feedback>
                </Form.Group>
            <Form.Group controlId="telefono3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                name="telefono3"
                type="number"
                value={formik.values.telefono3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Telefono"
                isInvalid={!!formik.errors.telefono3 && formik.touched.telefono3}
                isValid={formik.touched.telefono3 && !formik.errors.telefono3}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.telefono3}
                </Form.Control.Feedback>
            </Form.Group>
            <h6>Referencia N°2</h6>
            <Form.Group controlId="nombre2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                name="nombre2"
                type="text"
                value={formik.values.nombre2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Nombre"
                isInvalid={!!formik.errors.nombre2 && formik.touched.nombre2}
                isValid={formik.touched.nombre2 && !formik.errors.nombre2}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.nombre2}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="apellido2">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                name="apellido2"
                type="text"
                value={formik.values.apellido2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Apellido"
                isInvalid={!!formik.errors.apellido2 && formik.touched.apellido2}
                isValid={formik.touched.apellido2 && !formik.errors.apellido2}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.apellido2}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                name="email2"
                type="email"
                value={formik.values.email2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Email"
                isInvalid={!!formik.errors.email2 && formik.touched.email2}
                isValid={formik.touched.email2 && !formik.errors.email2}/>
                <Form.Control.Feedback type="invalid">
                {formik.errors.email2}
                </Form.Control.Feedback>
                </Form.Group>
            <Form.Group controlId="telefono2">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                name="telefono2"
                type="number"
                value={formik.values.telefono2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Telefono"
                isInvalid={!!formik.errors.telefono2 && formik.touched.telefono2}
                isValid={formik.touched.telefono2 && !formik.errors.telefono2}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.telefono2}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="success" type="submit">Guardar</Button>
            
        </Form>
    </div>
)
}
export default Referencias;