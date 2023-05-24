import { BrowserRouter,Route,Routes } from "react-router-dom"
import Wizard from "./Page/Wizard";
import Resumen from "./Page/Resumen";
import FinApp from "./Page/FinApp";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Wizard/>}/>
      <Route path="/resumen" element={<Resumen/>}/>
      <Route path="/FinApp" element={<FinApp/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
