import { useEffect, useState } from "react"
import "./style.css"

const index = ({InfosCharacter}) => {

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
        })
        .catch((error) => {
          console.error('Erro ao buscar os dados:', error);
        });
    };

  return (
    <div>
        <form>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Digite o nome do personagem..."/>
            <button onClick={fetchData}>Pesquisar</button>
        </form>
    </div>
  )
}

export default index