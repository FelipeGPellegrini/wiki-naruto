import { useState } from "react"
import "./style.css"
import { useNavigate } from 'react-router-dom';


const index = ({ InfosCharacter }) => {

  const navigateTo = useNavigate();

  const [name, setName] = useState("")

  const [data, setData] = useState(null)

  const fetchData = (e) => {
    e.preventDefault()
    fetch(`https://www.narutodb.xyz/api/character/search?name=${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        InfosCharacter(responseData)
        navigateTo('/info');

      })
      .catch((error) => {
        alert("Erro ao pesquisar personagem, verifique o nome e tente novamente.")
      });
  };

  return (
    <div>
      <h1 className="title">Digite o nome do personagem de Naruto para obter mais informações...</h1>
      <form>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Ex: Naruto Uzumaki" />
        <button onClick={fetchData}>Pesquisar</button>

      </form>
    </div>
  )
}

export default index