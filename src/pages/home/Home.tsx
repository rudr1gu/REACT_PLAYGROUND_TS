﻿interface HomeProps {
  titulo: string,
  texto?: string,
}

function Home(props: HomeProps) {
  return (
    <>
      <h1>{props.titulo}</h1>
      <p>{props.texto}</p>
    </>
  )
    
}

export default Home