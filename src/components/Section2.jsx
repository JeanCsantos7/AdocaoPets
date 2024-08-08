
import styleSection2 from "../styles/Section2.module.css"
import imagemCachorro from "../assets/CachorroImagem2.jpg"
import { useNavigate } from "react-router-dom"



export default function Section2()
{
    const navigate = useNavigate('')

    return(
     <>
    
    
    <div className={styleSection2.Container}>
    
    <span>
    <h1 className={styleSection2.Titulo}>Juntos vamos criar um <br /> impacto positivo na sociedade</h1>
    <p className={styleSection2.paragrafo}>Adotar é um ato importante para todos. Desta forma, o canil abre vagas  <br /> para outros animais e você leva um amigo para casa.</p>
    <button className={styleSection2.btnSaibaMais} onClick={() => {navigate('/Contato')}}>Saiba Mais</button> 
    </span>

    <img className={styleSection2.imagemCachorro} src={imagemCachorro} alt="" />
    </div>
 
     </>

    )
}