
import styleContato from "../styles/Contato.module.css"
import { addDoc, collection } from "firebase/firestore"
import {db} from "../firebaseConfig"

import { useState } from "react"

export default function Contato()
{
  
const[nome, setNome] = useState("")
const[email, setEmail] = useState("")
const[telefone, setTelefone] = useState("")
const[mensagem, setMensagem] = useState("")
const[mensagemAgradecimento, setMensagemAgradecimento] = useState("")

  async function CadastrarUsuario(e){
    e.preventDefault()

    try{
    await addDoc(collection(db, "contato"), {
      nome: nome,
      email: email,
      telefone: telefone,
      mensagem: mensagem
     })

     setEmail("")
    setNome("")
    setTelefone("")
    setMensagem("")
 
    
    setMensagemAgradecimento("Obrigado por entrar em contato, retornaremos em breve!!")

       
    setTimeout(() => {

      setMensagemAgradecimento("")
    }, 4200)
    }
    catch{
       console.error("Erro ao tentar cadastrar o usuario no banco de dados")
    }
  }



  return(
    <>
     <h1 className={styleContato.Titulo}>Entre em contato Conosco!</h1>
     <form  onSubmit={CadastrarUsuario} className={styleContato.ContainerForm}>
      <label className={styleContato.label} htmlFor="">Nome</label>
      <input value={nome} onChange={(e) => setNome(e.target.value)} className={styleContato.input} type="text" placeholder="Digite seu Nome" />
      <label className={styleContato.label} htmlFor="">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className={styleContato.input} type="email" placeholder="Digite seu Email" />
      <label className={styleContato.label} htmlFor="">Telefone</label>
      <input value={telefone} onChange={(e) => setTelefone(e.target.value)} className={styleContato.input} required type="number" placeholder="Digite seu Telefone" />
      <label className={styleContato.label} htmlFor="">Mensagem</label>
      <input value={mensagem} onChange={(e) => setMensagem(e.target.value)} className={styleContato.inputMensagem} required type="text" placeholder="Digite sua Mensagem" />
      <button  className={styleContato.btnEnvio}>Enviar</button>
     
      </form>

      <p className={styleContato.mensagemAgradecimento}>{mensagemAgradecimento}</p>
    </>
  )

}