import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'
import Login from './pages/login/Login'

function App() {

  return (
    <>
        <Home titulo='Olá mundo' texto='lorem impsum '/>
        <Contador />
        <Tarefa />
        <Login />
    </>
  )
}

export default App
