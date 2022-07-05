import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)
return(
  <div>
    <Pokemon/>
  </div>
)
}

export default App
