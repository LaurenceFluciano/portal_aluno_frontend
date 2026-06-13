import { Routes, Route} from 'react-router-dom'

import Login from './pages/Login';
import NovaSenha from './pages/NovaSenha';
import RecuperarSenha from './pages/RecuperarSenha';
import './index.css';
import './mobile.css';
import { Cadastro } from './pages/Cadastro';

function App() {

  return ( 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
        <Route path="/dashboard" element={<></>} />
        <Route path="/perfil" element={<></>} />
        <Route path="/disciplinas" element={<></>} />
        <Route path="/tutoria" element={<></>} />
      </Routes>
  )
}

export default App
