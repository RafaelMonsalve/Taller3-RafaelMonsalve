import { configureStore } from "@reduxjs/toolkit";
import formularioSlice from '../Slice/Slice';
import OcupacionSlice from '../Slice/SliceOcupacion';
import ProfesionSlice from '../Slice/SliceProfesion'
import BiografiaSlice from '../Slice/SliceBiografia'
import ReferenciaSlice from '../Slice/SliceReferencias'

const initialValue = {
    nombre:"",
    apellido:"",
    email:"",
    telefono:"",
    Empresa:"",
    Puesto:"",
    FechaInicio:"",
    FechaFin:"",
    instituto:"",
    carrera:"",
    FechaInicioP:"",
    FechaFinP:"",
    Biografia:"",
    nombre2:"",
    apellido2:"",
    email2:"",
    telefono2:"",
    nombre3:"",
    apellido3:"",
    email3:"",
    telefono3:""
}

const store = configureStore({
    reducer: {
      formulario: formularioSlice,
      Ocupacion: OcupacionSlice,
      Profesion:ProfesionSlice,
      Texto:BiografiaSlice,
      Referencias:ReferenciaSlice,
    },
  });
  
  export default store;