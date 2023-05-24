import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";

const Profesion=()=>{
    const ValidacionProfesion = 
    Yup.object({ 
        instituto:Yup.string().required('La institución es requerida'),
         carrera: Yup.string().required('La carrera es requerida'), 
         FechaInicio: Yup.date( ).required('La fecha de inicio es requerida').nullable(), 
         FechaFin: Yup.date() .required('La fecha de fin es requerida') .nullable() .min( Yup.ref('fechaInicio '), 'La fecha de fin debe ser posterior o igual a la fecha de inicio' ), });
        const formik=useFormik({
            initialValues:{
                instituto:"",
                carrera:"",
                FechaInicio:"",
                FechaFin:""
            },
            validationSchema:ValidacionProfesion,
            onSubmit:(values)=>{console.log(values)}
        });
return(
    <div>
        <h1>Profesion</h1>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="instituto">
                <Form.Label>Instituto</Form.Label>
                <Form.Control
                name="instituto"
                type="text"
                value={formik.values.instituto}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su instituto"
                isInvalid={!!formik.errors.instituto && formik.touched.instituto}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.instituto}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="carrera">
                <Form.Label>Carrera</Form.Label>
                <Form.Control
                name="carrera"
                type="text"
                value={formik.values.carrera}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su carrera"
                isInvalid={!!formik.errors.carrera && formik.touched.carrera}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.carrera}
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
export default Profesion;