import { useState } from 'react'
import Header from './Header'
import Home from './home'
import About from './about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home />
      <About />
      <Home />
      <About />
      <Home />
    </>
  )
}

export default App
