import { useState } from 'react'
import './App.css'
import Quote from './MyComponents/quote.jsx'
import PauseLine from './MyComponents/pause.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <span>ADVICE <em>#</em>117</span>
      <Quote/>
      <PauseLine/>
        <div className='dice_box'>
          <img src="/followCome/images/iconDice.svg" alt="icon dice" />
        </div>
    </div>
  )
}

export default App
