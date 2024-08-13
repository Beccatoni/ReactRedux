import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'



const Login = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex gap-10'>
    <button className='border-2 border-emerald-700' onClick={()=> {dispatch(login({name:'Pedro', age:22, email:'pedro@gmail.com'}))}}>Login</button>
    <button className='border-2 border-emerald-700' onClick={()=> {dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Login