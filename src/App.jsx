import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topic from './components/Topic.jsx'
import Namebox from './components/Namebox.jsx'
import Rolebox from './components/Rolebox.jsx'
import Matchingbox from './components/Matchingbox.jsx'
import Showmatching from './components/Showmatching.jsx'

function App() {
  const [groupname, setGroupname] = useState([])
  const [grouprole, setGrouprole] = useState([])
  const [results, setResults] = useState([])

  return (
    <>
    <Topic/>
      <div className = "input-zone">
        <Namebox groupname={groupname} setGroupname={setGroupname}/>
        <Rolebox grouprole={grouprole} setGrouprole={setGrouprole}/>
      </div>
      <Matchingbox groupname={groupname} grouprole={grouprole} results={results} setResults={setResults}/>
      <Showmatching results={results}/>
    </>
  )
}

export default App
