import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QueroAdotar from "./pages/QueroAdotar";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadastrarPet from "./pages/CadastrarPet";
import PrivateRoute from "./components/PrivateRoute"
import DetalhesAnimal from "./components/DetalhesAnimal";
import Admin from "./pages/Admin"
import AdminPainel from "./components/adminPainel";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import Error404 from "./components/Error404";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QueroAdotar" element={<QueroAdotar />} />
        <Route path="/DetalhesAnimal/:id" element={<DetalhesAnimal />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastrar" element={<Cadastro />} />
        <Route 
        path="/private" 
        element=
        {
        <PrivateRoute>
         <CadastrarPet/>
        
    
        </PrivateRoute>
        
      
      }
      />

    <Route 
        path="/adminPainel" 
        element=
        {
       <PrivateRouteAdmin>
         <AdminPainel/>

       </PrivateRouteAdmin>
         

    
      
        
      
      }
      />


      <Route path="/admin" element={<Admin/>}/>
      <Route path="*" element={<Error404/>}/>
      

      </Routes>
    </BrowserRouter>
  );
}


/* import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QueroAdotar from "./pages/QueroAdotar";
import QueroAjudar from "./pages/QueroAjudar";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadastrarPet from "./pages/CadastrarPet";


export default function Rotas()
{

    return(

      <BrowserRouter>
      
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/QueroAdotar" element={<QueroAdotar/>}></Route>
            <Route path="/QueroAjudar" element={<QueroAjudar/>}></Route>
            <Route path="/Contato" element={<Contato/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Cadastrar" element={<Cadastro/>}></Route>
            <Route path="/CadastrarPet" element={<CadastrarPet/>}></Route>
            <Route path="/private" element={<Private/>}></Route>
        </Routes>
      </BrowserRouter>

    )
} */