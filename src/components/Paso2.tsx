import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Interface/InterFace";

const Ocupacion=()=>{


    const dispatch = useDispatch();

    const selector = useSelector((state:RootState)=>state);
    const ValidacionProfesion = 
    Yup.object({ 
        Empresa:Yup.string().required('La Empresa es requerida'),
         Puesto: Yup.string().required('La Puesto es requerida'), 
         FechaInicio: Yup.date( ).required('La fecha de inicio es requerida').nullable(), 
         FechaFin: Yup.date().required('La fecha de fin es requerida').nullable().min(Yup.ref('FechaInicio'),'La fecha fin debe ser igual o mayor a la fecha inicio')
             })
             
        const formik=useFormik({
            initialValues:{
                Empresa:selector.Empresa,
                Puesto:selector.Puesto,
                FechaInicio:selector.FechaInicio,
                FechaFin:selector.FechaFin
            },
            validationSchema:ValidacionProfesion,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                })
                alert('Ocupacion Guardada con exito');}
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
                isInvalid={!!formik.errors.Empresa && formik.touched.Empresa}
                isValid={formik.touched.Empresa && !formik.errors.Empresa}/>
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
                isInvalid={!!formik.errors.Puesto && formik.touched.Puesto}
                isValid={formik.touched.Puesto && !formik.errors.Puesto}/>
                
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
                isInvalid={!!formik.errors.FechaInicio && formik.touched.FechaInicio}
                isValid={formik.touched.FechaInicio && !formik.errors.FechaInicio}/>
                
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
                isInvalid={!!formik.errors.FechaFin && formik.touched.FechaFin}
                isValid={formik.touched.FechaFin && !formik.errors.FechaFin}/>                
                <Form.Control.Feedback type="invalid">
                    {formik.errors.FechaFin}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="success" type="submit">Guardar</Button>
        </Form>
    </div>
)
}
export default Ocupacion;