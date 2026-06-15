import { Routes, Route, Navigate} from 'react-router-dom'

import Login from './pages/login/Login';
import NovaSenha from './pages/login/NovaSenha';
import RecuperarSenha from './pages/login/RecuperarSenha';
import './styles/index.css';
import './styles/mobile.css';
import { Cadastro } from './pages/cadastro/Cadastro';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  return ( 
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/perfil" element={<></>} />
        <Route path="/disciplinas" element={<></>} />
        <Route path="/tutoria" element={<></>} />
      </Routes>
  )
}

export default App
