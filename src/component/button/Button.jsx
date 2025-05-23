import React from 'react'
import '../button/button.css'
const Button = ({children,btnstyl}) => {
  return (
    <button className={btnstyl} type="button">{children}</button>
  )
}

export default Button