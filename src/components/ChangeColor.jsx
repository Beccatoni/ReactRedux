import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'


const ChangeColor = () => {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" onChange={(event)=> {
            setColor(event.target.value);
        }} />
        <button onClick={()=> {
            
            console.log(color)
            return dispatch(changeColor(color));
        }}>Change our color</button>
    </div>
  )
}

export default ChangeColor