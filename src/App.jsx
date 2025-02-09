import { useState } from 'react'
import Header from './Header'
import Home from './home'
import About from './about'
import Skills from './skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home />
      <About />
      <Skills />
      <Home />
      <About />
      <Home />
    </>
  )
}

export default App
