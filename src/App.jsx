import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import InfoCharacterPage from './components/InfoCharacterPage'
import { useState } from 'react'

function App() {

  const [Infos, setInfos] = useState([])

  function InfosCharacter (data) {
    setInfos(data)
    console.log(data)
  }

  return (
    <>
      <Header/>
      <Form InfosCharacter={InfosCharacter}/>
      {/* <InfoCharacterPage Infos={Infos}/> */}
    </>
  )
}

export default App
