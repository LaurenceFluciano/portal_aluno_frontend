import { Routes, Route, Navigate} from 'react-router-dom'

import Login from './pages/login/Login';
import NovaSenha from './pages/login/NovaSenha';
import RecuperarSenha from './pages/login/RecuperarSenha';
import './index.css';
import './mobile.css';
import { Cadastro } from './pages/cadastro/Cadastro';

function App() {

  return ( 
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

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
