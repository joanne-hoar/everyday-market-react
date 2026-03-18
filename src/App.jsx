import { useState } from 'react'
import spaceImg from './assets/nasa.png'
import Header from './header.jsx'
import './App.css'

function App() {
  // todo: turn this into something useful
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <img src={spaceImg} alt="Home Image" />
    </>
  )
}

export default App
