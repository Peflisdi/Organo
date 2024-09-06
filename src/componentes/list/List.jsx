import './List.css'

export default function List(props) {
  return (
    <div className='list'>
      <label>{props.label}</label>
      <select required={props.mandatory} onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} >
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}
