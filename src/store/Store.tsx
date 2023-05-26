import { configureStore } from "@reduxjs/toolkit";

const initialValue = {}

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