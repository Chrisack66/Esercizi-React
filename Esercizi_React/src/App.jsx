import { useState } from 'react'
import AlertClock from './AlertClock'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <AlertClock />
    </>
  )
}

export default App