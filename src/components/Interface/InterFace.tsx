import ReactNode from "react-switch";
export interface RootState{
    Empresa:string,
    Puesto:string,
    FechaInicio:string,
    FechaFin:string,
    instituto:string,
    carrera:string,
    FechaInicioP:string,
    FechaFinP:string,
    Biografia:string,
    nombre2:string,
    apellido2:string,
    email2:string,
    telefono2:number,
    nombre3:string,
    apellido3:string,
    email3:string,
    telefono3:number
    children: ReactNode[];
}
