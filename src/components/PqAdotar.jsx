import stylePqAdotar from "../styles/PqAdotar.module.css";
import imagemGato from "../assets/gatinho.png"
import imagemCachorro from "../assets/cachorroColo.png"
import imagemPasseio from "../assets/passear-com-o-cao.png"
import { Link } from "react-router-dom";

export default function PqAdotar() {
  return (
    <>
      <h1 className={stylePqAdotar.Titulo}>Por que Adotar?</h1>

       <div className={stylePqAdotar.Container}>
       <div className={stylePqAdotar.subContainer}>
       
       <img className={stylePqAdotar.imagemPet} src={imagemPasseio} alt="" />
        <span>
        
        <h1 className={stylePqAdotar.TituloContainer}>Nesse exato momento ,</h1>
        <p className={stylePqAdotar.Paragrafo}>existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu</p>
        </span>
      
       
      </div>

      <div className={stylePqAdotar.subContainer}>
       
       <img className={stylePqAdotar.imagemPet} src={imagemGato} alt="" />
        <span>
        
        <h1 className={stylePqAdotar.TituloContainer}>E não há recompensa maior</h1>
        <p className={stylePqAdotar.Paragrafo}>do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho.</p>
        </span>
      
       
      </div>

      <div className={stylePqAdotar.subContainer}>
       
       <img className={stylePqAdotar.imagemPet} src={imagemCachorro} alt="" />
        <span>
        
        <h1 className={stylePqAdotar.TituloContainer}>Pensando bem, a pergunta é:</h1>
        <p className={stylePqAdotar.Paragrafo}>se você pode mudar o destino de um animal de rua, por que não faria isso?</p>
        </span>
      
       
      </div>

    
     
  

       </div>

       
      <div className={stylePqAdotar.ContainerBtn}>
       <Link to={"/QueroAdotar"}>
       <button className={stylePqAdotar.btn}>Encontrar meu novo amigo</button>
       </Link>
       </div>

       

    
   

      
    </>
  );
}
