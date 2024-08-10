


import styleLogin from "../styles/Login.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { auth2 } from "../firebaseConfig";






export default function Admin(){

    const navigate = useNavigate("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadings, setLoading] = useState("");
    const[messageError, setMessageError] = useState("")
  
  
  
    
  
  
  
  
    function Loading() {
      setLoading(<Loader />);
    }
  
    async function Logar(e)
    {
      
      e.preventDefault()
  
      try{
  
        const autenticarUsuario = await signInWithEmailAndPassword(auth2, email, password)
        
       
    
  
  
        if(auth2)
        {
          Loading()
         
        }
  
        setTimeout(() => {
           
          navigate(`/adminPainel`)
      
  
        }, 1500)
      }
  
      catch{
       
        setMessageError("Email ou senha estão incorretos ")
      }
     
      
     
  
  
  
    }
  
  
   
  
    return (
      <>
        <main>
          <div className={styleLogin.ContainerForm}>
            <form onSubmit={Logar} className={styleLogin.form}>
              <h1 className={styleLogin.TituloCadastrar}>Entrar</h1>
              <label className={styleLogin.label} htmlFor="">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={styleLogin.campoInput}
                required
                type="email"
                placeholder="Informe seu Email"
              />
              <label className={styleLogin.label} htmlFor="">
                Senha
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={styleLogin.campoInput}
                required
                type="password"
                placeholder="Informe sua Senha"
              />
              <button className={styleLogin.btnRegistro}>Entrar</button>
              <div className={styleLogin.spinner}>{loadings}</div>
              <p className={styleLogin.textoValidacao}>{messageError}</p>
            </form>
          </div>
        </main>
      </>
    );


}