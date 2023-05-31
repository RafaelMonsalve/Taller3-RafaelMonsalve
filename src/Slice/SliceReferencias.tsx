import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState1 } from "../components/Interface/InterFace";


const initialState: RootState1 = {
    nombre2:"",
    apellido2:"",
    email2:"",
    telefono2:"",
    nombre3:"",
    apellido3:"",
    email3:"",
    telefono3:"",
    Referencias:undefined,
};

const ReferenciaSlice = createSlice({
  name: "Referencias",
  initialState,
  reducers: {
    agregarDatos: (state, action: PayloadAction<RootState1>) => {
      const { nombre2, apellido2, email2, telefono2,nombre3,apellido3,email3,telefono3 } = action.payload;
      return {
        ...state, 
        nombre2,
        apellido2,
        email2, 
        telefono2,
        nombre3,
        apellido3,
        email3,
        telefono3
      }
    },
  },
});

export const { agregarDatos } = ReferenciaSlice.actions;

export default ReferenciaSlice.reducer;
