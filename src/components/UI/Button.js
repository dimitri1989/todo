import React from 'react'
import '../UI/btn-UI.css'
const Button = ({todos}) => {
  return (
    <div className='btn-UI'>
        <button type='button' className='btn-complete' id={todos}>Complete</button>
        <button type='button' className='delete-btn' id={todos}>X</button>
    </div>
  )
}

export default Button