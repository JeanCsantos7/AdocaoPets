

import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import PqAdotar from "../components/PqAdotar"
import Section2 from "../components/Section2"
import styleHome from "../styles/Home.module.css"
import imagemHero from "../assets/carousel.jpg"
import Blog from "../components/Blog"
import Footer from "../components/Footer"






export default function Home()
{

  const navigate = useNavigate('')

    return(
       <>
      <Navbar/>
      <img className={styleHome.ImagemTopo} src={imagemHero} alt="" />
       
       <div className={styleHome.Container}>
       <Link to={'/QueroAdotar'}>
        <button className={styleHome.btnAdotar}>Quero Adotar</button>
       
       </Link>

       
       <button onClick={() => {navigate('/Login')}} className={styleHome.btnDivulgar}>Quero Divulgar um Animal</button>
       
 
       </div>

       <PqAdotar/>
       <Section2/>
       <Blog/>
      <Footer/>
       


       

       
      

    
       </>
         
    )
}