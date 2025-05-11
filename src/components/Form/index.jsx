import { useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

const Index = ({ InfosCharacter }) => {
  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const fetchData = (e) => {
    e.preventDefault();
    fetch("https://naruto-br-api.site/characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((characters) => {
        // Filtra personagem ignorando maiúsculas/minúsculas
        const personagem = characters.find(p =>
          p.name.toLowerCase() === name.toLowerCase()
        );

        if (personagem) {
          setData(personagem);
          InfosCharacter(personagem);
          navigateTo('/info');
        } else {
          alert("Personagem não encontrado. Verifique o nome e tente novamente.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao buscar os dados. Tente novamente mais tarde.");
      });
  };

  return (
    <div>
      <h1 className="title">Digite o nome do personagem de Naruto para obter mais informações...</h1>
      <form onSubmit={fetchData}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Ex: Naruto Uzumaki"
        />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Index;
