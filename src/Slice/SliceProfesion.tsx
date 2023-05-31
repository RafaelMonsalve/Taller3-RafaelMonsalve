import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState3 } from "../components/Interface/InterFace3";


const initialState: RootState3 = {
    instituto:"",
    carrera:"",
    FechaInicioP:"",
    FechaFinP:"",
    Profesion: undefined
};

const ProfesionSlice = createSlice({
  name: "Profesion",
  initialState,
  reducers: {
    agregarDatos: (state, action: PayloadAction<RootState3>) => {
      const { instituto, carrera, FechaInicioP, FechaFinP } = action.payload;
      return {
        ...state, 
        instituto,
        carrera,
        FechaInicioP,
        FechaFinP
      }
    },
  },
});

export const { agregarDatos } = ProfesionSlice.actions;

export default ProfesionSlice.reducer;
