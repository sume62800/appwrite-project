import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { conf } from './conf/conf'
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice'
import { useDispatch } from 'react-redux'
import Header from './compoenents/hearder/header'
import Footer from './compoenents/footer/footer'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch();
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !loading ? (
    <>
      <div>
        <Header/>
        <Footer/>
      </div>
    </>
  ): null
}

export default App
