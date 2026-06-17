import { Routes, Route, Navigate} from 'react-router-dom'

import Login from './app/pages/login/Login';
import NovaSenha from './app/pages/login/NovaSenha';
import RecuperarSenha from './app/pages/login/RecuperarSenha';
import './styles/index.css';
import './styles/mobile.css';
import { Cadastro } from './app/pages/cadastro/Cadastro';
import Dashboard from './app/pages/dashboard/Dashboard';
import DashboardLayout from './app/layout/DashboardLayout';
import Discipline from './app/pages/dashboard/Discipline';
import Perfil from './app/pages/dashboard/Perfil';
import Tutoria from './app/pages/dashboard/Tutoria';

function App() {

  return ( 
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />


        <Route element={<DashboardLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/perfil/dados-pessoais" element={<Perfil />} />
          <Route path="/disciplina" element={<Discipline/>} />
          <Route path="/tutoria" element={<Tutoria />} />
        </Route>
      </Routes>
  )
}

export default App
