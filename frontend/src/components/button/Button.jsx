import React from 'react'

const Button = ({content, name, id, onClick}) => {
  return (
    <div>
      <button className={name} id={id} onClick={onClick}>{content}</button>
    </div>
  )
}

export default Button
