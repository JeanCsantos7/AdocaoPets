

import Logotipo from "../assets/Logotipo.png"
import styleNavbar from "../styles/Navbar.module.css"
import { Link, useNavigate } from "react-router-dom"
import HamburguerImage from "../assets/MenuMobile.png"
import MenuMobile from "./MenuMobile"
import userLogin from "../assets/Login.png"

import { useState } from "react"

export default function Navbar()
{

    const[toggle, setToggle] = useState(true)
    const[exibirMenu, setExibirMenu] = useState('')
    const navigate = useNavigate("")

    function menuMobile()
    {

        setToggle(!toggle)
        setExibirMenu(toggle ? <MenuMobile/> : '')
    }

 
    return(
     <header className={styleNavbar.Cabecalho}>
        <div className={styleNavbar.Container}>
            
            <img onClick={() => {navigate("/")}} className={styleNavbar.Logotipo} src={Logotipo} alt="" />
            <Link className={styleNavbar.Links} to={'/QueroAdotar'}>Quero Adotar</Link>
            <Link className={styleNavbar.Links} to={'/Login'}>Quero Divulgar um Animal</Link>
            <Link className={styleNavbar.Links} to={'/Contato'}>Contato</Link>
            <Link className={styleNavbar.Entrar} to={'/Login'}>Entrar</Link>
            <Link className={styleNavbar.CadastreSe} to={'/Cadastrar'}>Cadastre-se</Link>
            <img onClick={menuMobile} className={styleNavbar.menuHamburguer} src={HamburguerImage} alt="" />
            <img onClick={() => navigate("/Login")} src={userLogin} className={styleNavbar.logarMobile} alt="" />
            
     
        </div>
        <div>{exibirMenu}</div>

       
        
     </header>

     

    )

}