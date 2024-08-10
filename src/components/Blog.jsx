import styleBlog from "../styles/Blog.module.css";
import Gato from "../assets/Gato.webp"
import Cachorro1 from "../assets/caramelo.jpg"
import Cachorro2 from "../assets/cachorroImagem3.jpg"

export default function Blog() {
  return (
    <>
    
  
    <h1 className={styleBlog.Titulo}>Blog</h1>
  
     
     
     
      <div className={styleBlog.Container}>
      
       <div className={styleBlog.subContainer}>
       <a href="https://adoteumpet.itapevi.sp.gov.br/quer-adotar-um-pet-da-uma-olhada-no-que-voce-precisa-saber-antes-de-adotar-um-animalzinho/"> <img className={styleBlog.imagemPets} src={Gato} alt="" /></a>
       <h3 className={styleBlog.tituloBlogTopo}>Blog</h3>
       <h1 className={styleBlog.TituloPrincipal}>Quer adotar um pet? veja o que você <br /> precisa saber antes de <br /> adotar um animalzinho.</h1>
       <p className={styleBlog.Paragrafo}>Adotar não é só escolher o animal <br /> mais bonitinho. Saiba como fazer <br /> uma adoção consciente e <br /> responsável.</p>
       <h3 className={styleBlog.Data}>24 de maio de 2021</h3>
       </div>

       <div  className={styleBlog.subContainer}>
      <a href="https://adoteumpet.itapevi.sp.gov.br/adocao-de-animais-de-estimacao-como-e-para-que/"><img className={styleBlog.imagemPets} src={Cachorro1} alt="" /></a> 
       <h3  className={styleBlog.tituloBlogTopo}>Blog</h3>
       <h1 className={styleBlog.TituloPrincipal}>Seja Consciente ao levar <br /> um novo amigo.</h1>
       <p className={styleBlog.Paragrafo}>Adotar não é só escolher o animal <br /> mais bonitinho. Saiba como fazer <br /> uma adoção consciente e <br /> responsável.</p>
       <h3 className={styleBlog.Data}>22 de abril de 2020</h3>
       </div>

       <div className={styleBlog.subContainer}>
       <img className={styleBlog.imagemPets} src={Cachorro2} alt="" />
       <h3 className={styleBlog.tituloBlogTopo}>Blog</h3>
       <h1 className={styleBlog.TituloPrincipal}>Como Ajudamos os <br /> Animais?</h1>
       <p className={styleBlog.Paragrafo}>Nos ajude a encontrar um novo lar <br /> para nossos animais.</p>
       <h3 className={styleBlog.Data}>18 de abril 2021</h3>
       </div>
      
      </div>
   
   
      

    </>

  );
}
