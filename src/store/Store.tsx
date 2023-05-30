import { configureStore } from "@reduxjs/toolkit";

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

const reducer = (state = initialValue,action) =>{
    switch (action.type){
        case"AGREGAR_DATOS":
        return {...state,...action.payload};
        default:
            return {};
    }
    
}
const store = configureStore({reducer});

export default store;