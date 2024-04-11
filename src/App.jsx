import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { conf } from './conf/conf'

function App() {
  const [count, setCount] = useState(0)
  
  console.log(conf.appwrite_url)
  return (
    <>
      <div>
       <h1>working with react app</h1>
       
      </div>
    </>
  )
}

export default App
