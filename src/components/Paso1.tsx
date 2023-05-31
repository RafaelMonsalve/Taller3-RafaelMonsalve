import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Interface/InterFace2";
import { agregarDatos } from "../Slice/Slice";


const Formulario = () => {

  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
 

  const ValidacionFormulario = Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio"),
    apellido: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
    telefono: Yup.number()
      .required("El telefono es obligatorio")
      .test("len", "El número no debe ser mayor de 10 y no menor que 7", (val) => {
        const len = val.toString().length;
        return len >= 7 && len <= 10;
      }),
  });

  const formik = useFormik({
    initialValues: {
      nombre: selector.nombre,
      apellido: selector.apellido,
      email: selector.email,
      telefono: selector.telefono,
    },
    validationSchema: ValidacionFormulario,
    onSubmit: (values) => {
      dispatch(agregarDatos(values));
      alert('Datos Personales guardados con exito');
    },
  
  });

  return (
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
            isInvalid={!!formik.errors.nombre && formik.touched.nombre}
            isValid={formik.touched.nombre && !formik.errors.nombre}
          />
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
            isInvalid={!!formik.errors.apellido && formik.touched.apellido}
            isValid={formik.touched.apellido && !formik.errors.apellido}
          />
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
            isInvalid={!!formik.errors.email && formik.touched.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
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
            isInvalid={!!formik.errors.telefono && formik.touched.telefono}
            isValid={formik.touched.telefono && !formik.errors.telefono}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.telefono}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;