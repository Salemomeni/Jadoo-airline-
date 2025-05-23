import React from 'react'
import './Button.css'
const Button = ({children,btnstyl}) => {
  return (
    <button className={btnstyl} type="button">{children}</button>
  )
}

export default Button