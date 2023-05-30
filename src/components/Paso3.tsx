import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {RootState}  from "./Interface/InterFace";

const Profesion=()=>{

    const dispatch = useDispatch();
    const selector = useSelector((state:RootState)=>state);

    const ValidacionProfesion = 
    Yup.object({ 
        instituto:Yup.string().required('La institución es requerida'),
         carrera: Yup.string().required('La carrera es requerida'), 
         FechaInicioP: Yup.date( ).required('La fecha de inicio es requerida').nullable(), 
         FechaFinP: Yup.date().required('La fecha de fin es requerida').nullable().min(Yup.ref('FechaInicioP'),'La fecha fin debe ser igual o mayor a la fecha inicio')
        });
        const formik=useFormik({
            initialValues:{ 
                instituto:selector.instituto,
                carrera:selector.carrera,
                FechaInicioP:selector.FechaInicioP,
                FechaFinP:selector.FechaFinP
            },
            validationSchema:ValidacionProfesion,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                })
                alert('Profesion Guardada con Exito');}
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
                isInvalid={!!formik.errors.instituto && formik.touched.instituto}
                isValid={formik.touched.instituto && !formik.errors.instituto}/>             
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
                isInvalid={!!formik.errors.carrera && formik.touched.carrera}
                isValid={formik.touched.carrera && !formik.errors.carrera}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.carrera}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="FechaInicioP">
                <Form.Label>FechaInicio</Form.Label>
                <Form.Control
                name="FechaInicioP"
                type="Date"
                value={formik.values.FechaInicioP}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese la fecha de inicio"
                isInvalid={!!formik.errors.FechaInicioP && formik.touched.FechaInicioP}
                isValid={formik.touched.FechaInicioP && !formik.errors.FechaInicioP}/>
                <Form.Control.Feedback type="invalid">
                {formik.errors.FechaInicioP}
                </Form.Control.Feedback>
                </Form.Group>
            <Form.Group controlId="FechaFinP">
                <Form.Label>FechaFin</Form.Label>
                <Form.Control
                name="FechaFinP"
                type="date"
                value={formik.values.FechaFinP}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese ingrese la fecha fin"
                isInvalid={!!formik.errors.FechaFinP && formik.touched.FechaFinP}
                isValid={formik.touched.FechaFinP && !formik.errors.FechaFinP}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.FechaFinP}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="success" type="submit">Guardar</Button>
        </Form>
    </div>
)
}
export default Profesion;