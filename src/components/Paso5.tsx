import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Referencias=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {selector}=useSelector(state=>state)
    const ValidacionReferencia=Yup.object({
        nombre:Yup.string().required("El nombre es obligatorio"),
        apellido:Yup.string().required("El apellido es obligatorio"),
        email:Yup.string().email("El email no es valido").required("El email es obligatorio"),
        telefono:Yup.number().required("El telefono es obligatorio").test('len','El numero no debe mayor de 10 y no menor que 7',val=>{
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
                nombre:"",
                apellido:"",
                email:"",
                telefono:"",
                nombre2:"",
                apellido2:"",
                email2:"",
                telefono2:""
            },
            validationSchema:ValidacionReferencia,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                });
                navigate("/resumen");
            }
        });
return(
    <div>
        <h1>Referencia N°1</h1>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                name="nombre"
                type="text"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Nombre"
                isInvalid={!!formik.errors.nombre && formik.touched.nombre}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.nombre}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="apellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                name="apellido"
                type="text"
                value={formik.values.apellido}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Apellido"
                isInvalid={!!formik.errors.nombre && formik.touched.apellido}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.apellido}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Email"
                isInvalid={!!formik.errors.nombre && formik.touched.email}/>
                <Form.Control.Feedback type="invalid">
                {formik.errors.email}
                </Form.Control.Feedback>
                </Form.Group>
            <Form.Group controlId="telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                name="telefono"
                type="number"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Telefono"
                isInvalid={!!formik.errors.nombre && formik.touched.telefono}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.telefono}
                </Form.Control.Feedback>
            </Form.Group>
            <h1>Referencia N°2</h1>
            <Form.Group controlId="nombre2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                name="nombre2"
                type="text"
                value={formik.values.nombre2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese el Nombre"
                isInvalid={!!formik.errors.nombre2 && formik.touched.nombre2}/>
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
                isInvalid={!!formik.errors.apellido2 && formik.touched.apellido2}/>
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
                isInvalid={!!formik.errors.email2 && formik.touched.email2}/>
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
                isInvalid={!!formik.errors.telefono2 && formik.touched.telefono2}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.telefono}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Siguiente</Button>
        </Form>
    </div>
)
}
export default Referencias;