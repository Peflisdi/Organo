// import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {

  const onTyped = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.valor} onChange={onTyped} required={props.mandatory} placeholder={props.placeholder} />
    </div>
  )
}

export default TextField