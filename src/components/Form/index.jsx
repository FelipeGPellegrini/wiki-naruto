import { useEffect, useState } from "react"
import "./style.css"

const index = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch(`https://www.narutodb.xyz/api/character/search?name=${name}`)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])

  return (
    <div>
        <form>
            <input type="text" name="" id="" placeholder="Digite o nome do personagem..."/>
            <button>Pesquisar</button>
        </form>
    </div>
  )
}

export default index