import styleQueroAdotar from "../styles/QueroAdotar.module.css";
import { getDocs, collection, query, where, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QueroAdotar() {
  const [arrayAnimais, setArrayAnimais] = useState([]);
  const [dadoDigitado, setDadoDigitado] = useState("");
  const [especie, setEspecie] = useState("");
  const [genero, setGenero] = useState("");
  const [porte, setPorte] = useState("");
  const [cidade, setCidade] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [Erro, setErro] = useState(false);
  const filtro = [];
  const navigate = useNavigate();

  function navegar(idAnimal) {
    navigate(`/DetalhesAnimal/${idAnimal}`);
  }

  async function RenderizarDados() {
    try {
      const pegarColecao = await getDocs(collection(db, "animais"));
      const retornoDados = pegarColecao.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setArrayAnimais(retornoDados);
    } catch {
      alert("Não foi possível acessar essa página!");
    }
  }

  useEffect(() => {
    RenderizarDados();
  }, []);

 





  async function Buscar(e) {
    e.preventDefault();

    try{

      if(dadoDigitado ){
        filtro.push(where("name", "==", dadoDigitado))
      }
      
      if(especie && especie !== "Todas as espécies"){
        filtro.push(where("especie", "==", especie))
     
      }

      if(genero && genero !== "Todos os Gêneros"){
        filtro.push(where("sexo", "==", genero))
      }

      if(porte && porte !== "Todos os Portes"){
        filtro.push(where("porte", "==", porte))
      }
    
      if(cidade && cidade !== "Todas as Cidades"){
        filtro.push(where("cidade", "==", cidade))
      }

   

      
      const consultaDados = query(collection(db, "animais"), ...filtro)
      const retornoDados = await getDocs(consultaDados)
      const resultadoRetorno = retornoDados.docs.map((item) => ({
        id: item.id,
        ...item.data()
      }))

      setArrayAnimais(resultadoRetorno)
   

      if(resultadoRetorno.length === 0){
        setErro(true)
        setMensagemErro( "Não Há resultados de Busca")
        
        
      }

      

      else{

        setErro(false)
        setMensagemErro("")

      }
 



    }

    catch(error){
      console.error(error)
    }

   
  }

  return (
    <>
      <span className={styleQueroAdotar.Buscar}>
        <h1 className={styleQueroAdotar.Titulo}>Encontre seu novo "Aumigo"</h1>
      </span>

      <div className={styleQueroAdotar.Filtros}>
        <select
          className={styleQueroAdotar.inputFiltro}
          onChange={(e) => setEspecie(e.target.value)}
        >
          <option>Todas as espécies</option>
          <option>Cachorro</option>
          <option>Gato</option>
        </select>

        <select
          className={styleQueroAdotar.inputFiltro}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option>Todos os Gêneros</option>
          <option>Macho</option>
          <option>Fêmea</option>
        </select>

        <select
          className={styleQueroAdotar.inputFiltro}
          onChange={(e) => setPorte(e.target.value)}
        >
          <option>Todos os Portes</option>
          <option>Pequeno</option>
          <option>Médio</option>
          <option>Grande</option>
        </select>
      </div>

      <div className={styleQueroAdotar.Filtros}>
        <select
          className={styleQueroAdotar.inputFiltro}
          onChange={(e) => setCidade(e.target.value)}
        >
          <option>Todas as Cidades</option>
          <option>Acre</option>
          <option>Alagoas</option>
          <option>Amapá</option>
          <option>Amazonas</option>
          <option>Bahia</option>
          <option>Ceará</option>
          <option>Espírito Santo</option>
          <option>Goiás</option>
          <option>Maranhão</option>
          <option>Mato Grosso</option>
          <option>Mato Grosso do Sul</option>
          <option>Minas Gerais</option>
          <option>Pará</option>
          <option>Paraíba</option>
          <option>Paraná</option>
          <option>Pernambuco</option>
          <option>Piauí</option>
          <option>Rio de Janeiro</option>
          <option>Rio Grande do norte</option>
          <option>Rio Grande do Sul</option>
          <option>Rondônia</option>
          <option>Roraima</option>
          <option>Santa Catarina</option>
          <option>São Paulo</option>
          <option>Sergipe</option>
          <option>Tocantins</option>
          <option>Distrito Federal</option>
        </select>

        <input
          className={styleQueroAdotar.NomeAnimal}
          type="text"
          placeholder="Nome do Animal"
          onChange={(e) => setDadoDigitado(e.target.value)}
        />

        <button onClick={Buscar} className={styleQueroAdotar.btnBuscar}>
          BUSCAR
        </button>
      </div>

      {Erro ? <p className={styleQueroAdotar.mensagemErro}>{mensagemErro}</p> : ""}

      <div className={styleQueroAdotar.Container}>
        {arrayAnimais.map((item) => (
          <div
            key={item.id}
            onClick={() => navegar(item.id)}
            className={styleQueroAdotar.subContainer}
          >
            <img
              className={styleQueroAdotar.imagemAnimal}
              src={item.imagem}
              alt=""
            />
            <div className={styleQueroAdotar.Containerv2}>
              <p className={styleQueroAdotar.name}>{item.name}</p>
              <span className={styleQueroAdotar.especie_porte}>
                <p className={styleQueroAdotar.sexo}>{item.sexo}</p> -
                <p className={styleQueroAdotar.especie}>{item.especie}</p> -
                <p className={styleQueroAdotar.porte}>{item.porte}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
