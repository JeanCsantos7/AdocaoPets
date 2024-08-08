import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import localizacao from "../assets/localizacao.png";
import telefone from "../assets/telefone.png";
import pessoa from "../assets/pessoa.png";
import styleDetalheAnimais from "../styles/DetalhesAnimais.module.css";
import Navbar from "../components/Navbar";

export default function DetalhesAnimal() {
  const [animal, setAnimal] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const auth = getAuth();
 

  useEffect(() => {
    async function renderizar() {
      try {
        const documento = doc(db, "animais", id);
        const pegarDocumento = await getDoc(documento);
        const retornoDado = pegarDocumento.data();
        const emailUser = retornoDado.email;
        setEmail(emailUser);
        setAnimal(retornoDado);
      } catch (error) {
        console.error(error);
      }
    }

    renderizar();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className={styleDetalheAnimais.Container}>
        <img
          className={styleDetalheAnimais.imagemAnimal}
          src={animal.imagem}
          alt=""
        />

        <h1 className={styleDetalheAnimais.nomeAnimal}>{animal.name}</h1>

        <div className={styleDetalheAnimais.subContainer}>
          <p>{animal.idade}</p> |<p>{animal.especie}</p> |<p>{animal.porte}</p>
        </div>

        <h1 className={styleDetalheAnimais.historiaNome}>
          A história de {animal.name}
        </h1>
        <p className={styleDetalheAnimais.historia}>{animal.historia}</p>

        <div className={styleDetalheAnimais.informacoesAdicionais}>
          <span className={styleDetalheAnimais.informacao}>
            <img
              className={styleDetalheAnimais.informacaoImg}
              src={localizacao}
              alt=""
            />
            <p className={styleDetalheAnimais.cidade}>
              Está em: {animal.cidade}
            </p>
          </span>
          <span className={styleDetalheAnimais.informacao}>
            <img
              className={styleDetalheAnimais.informacaoImg}
              src={pessoa}
              alt=""
            />
            <p className={styleDetalheAnimais.quemPostou}>
              Postado por: {email}
            </p>
          </span>
          <span className={styleDetalheAnimais.informacao}>
            <img
              className={styleDetalheAnimais.informacaoImg}
              src={telefone}
              alt=""
            />
            <p className={styleDetalheAnimais.contato}>
              Contato: {animal.telefone}
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
