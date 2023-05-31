import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../components/Interface/InterFace2";


const initialState: RootState = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  formulario: undefined
};

const formularioSlice = createSlice({
  name: "formulario",
  initialState,
  reducers: {
    agregarDatos: (state, action: PayloadAction<RootState>) => {
      const { nombre, apellido, email, telefono } = action.payload;
      return {
        ...state, 
        nombre,
        apellido,
        email,
        telefono
      }
    },
  },
});

export const { agregarDatos } = formularioSlice.actions;

export default formularioSlice.reducer;
