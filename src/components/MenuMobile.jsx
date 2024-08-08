import styleMenuMobile from "../styles/MenuMobile.module.css";
import { Link } from "react-router-dom";

export default function MenuMobile() {
  return (
    <>
      
        <div className={styleMenuMobile.Container}>
          <Link className={styleMenuMobile.Links} to={"/QueroAdotar"}>
            Quero Adotar
          </Link>
          <Link className={styleMenuMobile.Links} to={"/Login"}>
            Quero Divulgar um animal
          </Link>
          <Link className={styleMenuMobile.Links} to={"/Contato"}>
            Contato
          </Link>
      
          
        </div>
      
    </>
  );
}
