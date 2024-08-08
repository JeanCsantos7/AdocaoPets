
import styleCadastro from "../styles/Cadastro.module.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../firebaseConfig"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Loader from "../components/Loader"


export default function Cadastro()
{
  
  
  
  const navigate = useNavigate("")
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('') 
  const[loadings, setLoading]  = useState('')



 /*  Funcao onde cadastra e autentica usuários atráves do createUserWithEmailAndPassword e logo após é realizado o cadastro no banco de dados! */

  

  function SpinnerLoading()
  {
    setLoading(<Loader/>)
  }

   async function cadastrarUsuarios(e)
   {
    e.preventDefault()
    
    try{
      const criarConta = await createUserWithEmailAndPassword(auth, email, password)
      const usuarioSelecionado = criarConta.user

      await addDoc(collection(db, 'users'), {
        uid: usuarioSelecionado.uid,
        name: name,
        email: email,
        password: password
      })

      setTimeout(() => {
          navigate("/Login")
      }, 1500)
    }

    catch{
      alert('Não foi possível cadastrar esse usuário')
    }

   }

  return(
    <>

    <main>
    
  
    
    <div className={styleCadastro.ContainerForm}>
    <form onSubmit={cadastrarUsuarios} className={styleCadastro.form}>
    <h1 className={styleCadastro.TituloCadastrar}>Cadastrar</h1>
    <label className={styleCadastro.label} htmlFor="">Nome</label>
    <input onChange={(e) => setName(e.target.value)} className={styleCadastro.campoInput} required type="text" placeholder="Informe seu nome e sobrenome" />
    <label className={styleCadastro.label} htmlFor="">Email</label>
    <input onChange={(e) => setEmail(e.target.value)} className={styleCadastro.campoInput} required type="email" placeholder="Informe seu Email" />
    <label className={styleCadastro.label} htmlFor="">Senha</label>
    <input onChange={(e) => setPassword(e.target.value)} className={styleCadastro.campoInput} required type="password" placeholder="Crie uma Senha" />
    <button onClick={SpinnerLoading} className={styleCadastro.btnRegistro}>Criar Conta</button>
    <div className={styleCadastro.spinner}>{loadings}</div>
  
    
   </form>
    </div>
    
    </main>
  
    </>
  )
}