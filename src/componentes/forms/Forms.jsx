import './Forms.css'
import TextField from '../TextField/TextField';
import List from '../list/List';
import Button from '../Button/Button';
import { useState } from 'react';

export default function Forms(props) {

  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e gestão',
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const onSave = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className='forms'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
      <TextField mandatory={true} label='Nome' placeholder='Digite seu nome' valor={nome} aoAlterado={valor => setNome(valor)} />
      <TextField mandatory={true} label='Cargo' placeholder='Digite seu cargo' valor={cargo} aoAlterado={valor => setCargo(valor)} />
      <TextField label='Imagem' placeholder='Informe o endereço da imagem' valor={imagem} aoAlterado={valor => setImagem(valor)} />
      <List mandatory={true} label='Time' itens={times} valor={time} aoAlterado={valor => setTime(valor)} />
      <Button texto='Criar card'/>
      </form>
    </section>
  )
}
