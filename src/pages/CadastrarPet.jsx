import styleCadastrarPet from "../styles/CadastrarPet.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastrarPet() {
  const [name, setName] = useState("");
  const [especie, setEspecie] = useState("");
  const [porte, setPorte] = useState("");
  const [sexo, setSexo] = useState("");
  const [cidade, setCidade] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState();
  const [historia, setHistoria] = useState();
  const [imagem, setImagem] = useState(null);
  const [renderizarImagem, setRenderizar] = useState(null);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate("")

  async function CadastrarBD(e) {
    e.preventDefault();

    try {
      let imagemURL = "";
      if (imagem) {
        const caminhoImagem = ref(storage, `animais/${imagem.name}`);
        await uploadBytes(caminhoImagem, imagem);
        imagemURL = await getDownloadURL(caminhoImagem);
      }

      await addDoc(collection(db, "animais"), {
        name: name,
        cidade: cidade,
        telefone: telefone,
        historia: historia,
        sexo: sexo,
        especie: especie,
        porte: porte,
        idade: idade,
        imagem: imagemURL,
      });

      setName("");
      setMensagem(
        "Obrigado por cadastrar seu animalzinho, confira a página de animais Cadastrados"
      );

      setHistoria("")
      setTelefone("")
      setTimeout(() => {
        setMensagem("");
      }, 3300);

      setRenderizar("");
    } catch {
      console.error("Não foi possível finalizar o cadastramento");
    }
  }

  function handleImageChange(e) {
    const arquivoSelecionado = e.target.files[0];
    setImagem(arquivoSelecionado);
    setRenderizar(URL.createObjectURL(arquivoSelecionado));
  }

  return (
    <>
      <div className={styleCadastrarPet.Container}>
      <h1 className={styleCadastrarPet.Titulo}>Cadastre aqui o Animal</h1>
      <h2 onClick={()=> {
        setTimeout(() => {
          navigate("/Login")
        }, 4300);
       
        
        
        }}className={styleCadastrarPet.subTitulo}>Sair</h2>
      </div>
  
      <form onSubmit={CadastrarBD} className={styleCadastrarPet.formContainer}>
        <label className={styleCadastrarPet.label} htmlFor="">
          Carregue uma imagem
        </label>
        <input
          className={styleCadastrarPet.input}
         
          type="file"
          onChange={handleImageChange}
        />

        <img
          src={renderizarImagem}
          alt="Preview"
          className={styleCadastrarPet.imagePreview}
        />

        <label className={styleCadastrarPet.label} htmlFor="">
          Nome do Pet
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          className={styleCadastrarPet.input}
          type="text"
          value={name}
          placeholder="Digite aqui o Nome do animalzinho"
        />

        <label className={styleCadastrarPet.label} htmlFor="">
          Telefone
        </label>
        <input
          onChange={(e) => setTelefone(e.target.value)}
          className={styleCadastrarPet.input}
          type="number"
          value={telefone}
          placeholder="Digite aqui o telefone pra contato"
        />




<label className={styleCadastrarPet.label} htmlFor="">
          Cidade
        </label>
        <select
          onChange={(e) => setCidade(e.target.value)}
          className={styleCadastrarPet.input}
        >
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

        <label className={styleCadastrarPet.label} htmlFor="">
          Tipo
        </label>
        <select
          onChange={(e) => setEspecie(e.target.value)}
          className={styleCadastrarPet.input}
        >
          <option>Cachorro</option>
          <option>Gato</option>
        </select>

         <label className={styleCadastrarPet.label} htmlFor="">
          Tempo
        </label>
        <select
          onChange={(e) => setIdade(e.target.value)}
          className={styleCadastrarPet.input}
        >
          <option>Adulto</option>
          <option>Filhote</option>
        </select>





       

        <label className={styleCadastrarPet.label} htmlFor="">
          Sexo
        </label>
        <select
          onChange={(e) => setSexo(e.target.value)}
          className={styleCadastrarPet.input}
        >
          <option>Macho</option>
          <option>Fêmea</option>
        </select>

        <label className={styleCadastrarPet.label} htmlFor="">
          Porte
        </label>
        <select
          onChange={(e) => setPorte(e.target.value)}
          className={styleCadastrarPet.input}
        >
          <option>Pequeno</option>
          <option>Médio</option>
          <option>Grande</option>
        </select>

        <label className={styleCadastrarPet.label} htmlFor="">
          História do pet
        </label>
        <input
          onChange={(e) => setHistoria(e.target.value)}
          className={styleCadastrarPet.inputHistoria}
          type="text"
          value={historia}
          placeholder="Digite aqui a historia do animal"
          required
        />

        <button className={styleCadastrarPet.btnPublicar}>Publicar</button>
        <p className={styleCadastrarPet.mensagemAgradecimento}>{mensagem}</p>
  
              </form>
    </>
  );
}
