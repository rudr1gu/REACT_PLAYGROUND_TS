import { useState } from "react"

function Contador() {
   const [valor, setValor] = useState(0)

   const handleClick = () => setValor(valor + 1);
   
  return (
    <>
      <h1>Contador</h1>
      <p>O Valor Atual é: {valor}</p>
      <button onClick={handleClick}>Adicionar</button>
    </>
  )
}

export default Contador