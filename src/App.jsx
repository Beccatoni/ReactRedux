import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColor from './components/ChangeColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-emerald-100 h-screen w-screen flex flex-col items-center justify-center'>
    <p className=''>Hellowwwww!</p>
    <Profile/>
    <Login/>
    <ChangeColor/>
    </div>
    
    </>
  )
}

export default App
