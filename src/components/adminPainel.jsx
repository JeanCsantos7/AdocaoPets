import { getDocs, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import styleAdminPainel from "../styles/AdminPainel.module.css";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import lixeiraIcon from "../assets/trash.png";


export default function AdminPainel() {
  const [arrayAnimais, setArrayAnimais] = useState([]);


  async function renderizar() {
    try {
      const pegarDocumentos = await getDocs(collection(db, "animais"));
      const todosDocumentos = pegarDocumentos.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setArrayAnimais(todosDocumentos);
    } catch {
      console.error("ERROR");
    }
  }

  useEffect(() => {
    renderizar();
  }, []);

  async function remover(id) {
    const documento = doc(db, "animais", id);
    await deleteDoc(documento);
    renderizar();
  }





  return (
    <>
    
      <div className={styleAdminPainel.Container}>
        {arrayAnimais.map((item) => (
          <div key={item.id} className={styleAdminPainel.subContainer}>
            <img
              className={styleAdminPainel.imagemAnimal}
              src={item.imagem}
              alt=""
            />
            <div className={styleAdminPainel.Containerv2}>
              <span className={styleAdminPainel.name_delete}>
               <p className={styleAdminPainel.name}>{item.name}</p>
                <img
                  className={styleAdminPainel.lixeira}
                  src={lixeiraIcon}
                  alt=""
                  onClick={() => remover(item.id)}
                />
             
              </span>
              <span className={styleAdminPainel.especie_porte}>
                <p className={styleAdminPainel.sexo}>{item.sexo}</p> -
                <p className={styleAdminPainel.especie}>{item.especie}</p> -
                <p className={styleAdminPainel.porte}>{item.porte}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
