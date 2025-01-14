import { useEffect, useState } from "react"

function Tarefa() {
  const[completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if(completed){
      setTarefa('Tarefa Concluída');
    }else{
      setTarefa('Tarefa Pendente');
    }
  }, [completed])

  return (
    <>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a Tarefa</p>
      <button onClick={() => setCompleted(v => !v)}>{
        completed ? 'Desfazer' : 'Concluir'
        }</button>
    </>
  )
}

export default Tarefa