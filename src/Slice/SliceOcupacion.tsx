import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState2 } from "../components/Interface/Interface4";


const initialState: RootState2 = {
    Empresa:"",
    Puesto:"",
    FechaInicio:"",
    FechaFin:"",
    Ocupacion: undefined
};

const OcupacionSlice = createSlice({
  name: "Ocupacion",
  initialState,
  reducers: {
    agregarDatos: (state, action: PayloadAction<RootState2>) => {
      const { Empresa, Puesto, FechaInicio, FechaFin } = action.payload;
      return {
        ...state, 
        Empresa,
        Puesto,
        FechaInicio,
        FechaFin
      }
    },
  },
});

export const { agregarDatos } = OcupacionSlice.actions;

export default OcupacionSlice.reducer;
