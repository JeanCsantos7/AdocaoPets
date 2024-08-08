import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import CadastrarPet from "../pages/CadastrarPet";





function PrivateRoute() {
  const [user, loading] = useAuthState(auth);


  








  return user ? <CadastrarPet/> : <Navigate to={"/Login"}/>

}

export default PrivateRoute;
