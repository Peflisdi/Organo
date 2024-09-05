import './Forms.css'
import TextField from '../TextField/TextField';

export default function Forms() {
  return (
    <section className='forms'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
      <TextField label='Nome' placeholder='Digite seu nome'/>
      <TextField label='Cargo' placeholder='Digite seu cargo'/>
      <TextField label='Imagem' placeholder='Informe o endereço da imagem'/>
      </form>
    </section>
  )
}
