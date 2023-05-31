import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState5 } from "../components/Interface/InterFace5";


const initialState: RootState5 = {
    Biografia: "",
    Texto: undefined
};

const BiografiaSlice = createSlice({
  name: "Texto",
  initialState,
  reducers: {
    agregarDatos: (state, action: PayloadAction<RootState5>) => {
      const {Biografia} = action.payload;
      return {
        ...state, 
        Biografia
             }
    },
  },
});

export const { agregarDatos } = BiografiaSlice.actions;

export default BiografiaSlice.reducer;
