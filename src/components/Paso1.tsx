import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";

const Formulario=()=>{
    const ValidacionFormulario=Yup.object({
        nombre:Yup.string().required("El nombre es obligatorio"),
        apellido:Yup.string().required("El apellido es obligatorio"),
        email:Yup.string().email("El email no es valido").required("El email es obligatorio"),
        telefono:Yup.number().required("El telefono es obligatorio").test('len','El numero no debe mayor de 10 y no menor que 7',val=>{
            const len = val.toString().length;
             return len >=7 && len <=10;
        }),})
        const formik=useFormik({
            initialValues:{
                nombre:"",
                apellido:"",
                email:"",
                telefono:""
            },
            validationSchema:ValidacionFormulario,
            onSubmit:(values)=>{console.log(values)}
        });
return(
    <div>
        <h1>Formulario</h1>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                name="nombre"
                type="text"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su Nombre"
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
                placeholder="Ingrese su Apellido"
                isInvalid={!!formik.errors.apellido && formik.touched.apellido}/>
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
                placeholder="Ingrese su Email"
                isInvalid={!!formik.errors.email && formik.touched.email}/>
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
                placeholder="Ingrese su Telefono"
                isInvalid={!!formik.errors.telefono && formik.touched.telefono}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.telefono}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Siguiente</Button>
        </Form>
    </div>
)
}
export default Formulario;