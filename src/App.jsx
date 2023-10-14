import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import InfoCharacterPage from './components/InfoCharacterPage'
import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

function App() {

  const [Infos, setInfos] = useState([])

  function InfosCharacter (data) {
    setInfos(data)
    console.log(data)
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Form InfosCharacter={InfosCharacter}/>}/>
        <Route path='/info' element={<InfoCharacterPage Infos={Infos}/>}/>
      </Routes>
    </>
  )
}

export default App
