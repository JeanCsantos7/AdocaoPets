import imagemErro from "../assets/ERRO404.jpeg"
import styleErro from "../styles/Error404.module.css"

export default function Error404(){

    return(
        <>
        
        <img className={styleErro.Error404} src={imagemErro} alt="" />
     
        </>
    )
}