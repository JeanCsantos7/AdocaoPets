

 import { Navigate } from "react-router-dom"
 import { useAuthState } from "react-firebase-hooks/auth";
 import AdminPainel from "./adminPainel";
 import { auth2 } from "../firebaseConfig";

export default function PrivateRouteAdmin(){
  
    const[user, login] = useAuthState(auth2)

    return user ? <AdminPainel/> : <Navigate to={"/admin"}/>

}