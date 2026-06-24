import { Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'

import Login from './app/pages/login/Login';
import NovaSenha from './app/pages/login/NovaSenha';
import RecuperarSenha from './app/pages/login/RecuperarSenha';
import './styles/index.css';
import './styles/mobile.css';
import Cadastro from './app/pages/cadastro/Cadastro';
import Dashboard from './app/pages/dashboard/Dashboard';
import DashboardLayout from './app/layout/DashboardLayout';
import Discipline from './app/pages/dashboard/Discipline';
import Perfil from './app/pages/dashboard/Perfil';
import Tutoria from './app/pages/dashboard/Tutoria';

import UserProvider from './context/UserProvider.jsx';

function App() {

  return ( 
      <UserProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />

              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/recuperar-senha" element={<RecuperarSenha />} />
              <Route path="/nova-senha" element={<NovaSenha />} />


              <Route element={<DashboardLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/perfil/dados-pessoais" element={<Perfil />} />
                <Route path="/perfil/configuracoes" element={<Perfil />} />
                <Route path="/perfil/seguranca" element={<Perfil />} />
                <Route path="/disciplina" element={<Discipline/>} />
                <Route path="/tutoria" element={<Tutoria />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>

  )
}

export default App
