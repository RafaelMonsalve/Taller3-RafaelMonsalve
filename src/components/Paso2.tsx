import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";

const Ocupacion=()=>{
    const ValidacionProfesion = 
    Yup.object({ 
        Empresa:Yup.string().required('La Empresa es requerida'),
         Puesto: Yup.string().required('La Puesto es requerida'), 
         FechaInicio: Yup.date( ).required('La fecha de inicio es requerida').nullable(), 
         FechaFin: Yup.date() .required('La fecha de fin es requerida') .nullable() .min( Yup.ref('fechaInicio '), 'La fecha de fin debe ser posterior o igual a la fecha de inicio' ), });
        const formik=useFormik({
            initialValues:{
                Empresa:"",
                Puesto:"",
                FechaInicio:"",
                FechaFin:""
            },
            validationSchema:ValidacionProfesion,
            onSubmit:(values)=>{console.log(values)}
        });
return(
    <div>
        <h1>Ocupacion</h1>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="Empresa">
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                name="Empresa"
                type="text"
                value={formik.values.Empresa}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su Empresa"
                isInvalid={!!formik.errors.Empresa && formik.touched.Empresa}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.Empresa}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="Puesto">
                <Form.Label>Puesto</Form.Label>
                <Form.Control
                name="Puesto"
                type="text"
                value={formik.values.Puesto}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su carrera"
                isInvalid={!!formik.errors.Puesto && formik.touched.Puesto}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.Puesto}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="FechaInicio">
                <Form.Label>FechaInicio</Form.Label>
                <Form.Control
                name="FechaInicio"
                type="date"
                value={formik.values.FechaInicio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese la fecha de inicio"
                isInvalid={!!formik.errors.FechaInicio && formik.touched.FechaInicio}/>
                <Form.Control.Feedback type="invalid">
                {formik.errors.FechaInicio}
                </Form.Control.Feedback>
                </Form.Group>
            <Form.Group controlId="FechaFin">
                <Form.Label>FechaFin</Form.Label>
                <Form.Control
                name="FechaFin"
                type="date"
                value={formik.values.FechaFin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese ingrese la fecha fin"
                isInvalid={!!formik.errors.FechaFin && formik.touched.FechaFin}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.FechaFin}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Siguiente</Button>
        </Form>
    </div>
)
}
export default Ocupacion;