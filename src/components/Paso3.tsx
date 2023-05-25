import { useFormik } from "formik";
import {Form,Button} from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Profesion=()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ValidacionProfesion = 
    Yup.object({ 
        instituto:Yup.string().required('La institución es requerida'),
         carrera: Yup.string().required('La carrera es requerida'), 
         FechaInicioP: Yup.date( ).required('La fecha de inicio es requerida').nullable(), 
         FechaFinP: Yup.date().required('La fecha de fin es requerida').nullable().min(Yup.ref('FechaInicioP'),'La fecha fin debe ser igual o mayor a la fecha inicio')
        });
        const formik=useFormik({
            initialValues:{ 
                instituto:"",
                carrera:"",
                FechaInicioP:"",
                FechaFinP:""
            },
            validationSchema:ValidacionProfesion,
            onSubmit:(values)=>{
                dispatch({
                    type:'AGREGAR_DATOS',
                    payload:values
                })
                navigate("/Biografia")}
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
                name="FechaInicioP"
                type="date"
                value={formik.values.FechaInicioP}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese la fecha de inicio"
                isInvalid={!!formik.errors.FechaInicioP && formik.touched.FechaInicioP}/>
                <Form.Control.Feedback type="invalid">
                {formik.errors.FechaInicioP}
                </Form.Control.Feedback>
                </Form.Group>
            <Form.Group controlId="FechaFin">
                <Form.Label>FechaFin</Form.Label>
                <Form.Control
                name="FechaFinP"
                type="date"
                value={formik.values.FechaFinP}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese ingrese la fecha fin"
                isInvalid={!!formik.errors.FechaFinP && formik.touched.FechaFinP}/>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.FechaFinP}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Siguiente</Button>
        </Form>
    </div>
)
}
export default Profesion;