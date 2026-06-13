import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/login';
import NovaSenha from './pages/novaSenha';
import RecuperarSenha from './pages/recuperarSenha';
import CadastroPassoUm from './pages/cadastroPassoUm';
import CadastroPassoDois from './pages/cadastroPassoDois';
import './index.css';
import './mobile.css';

function App() {

  return ( 
    <BrowserRouter>
      <routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastroUm" element={<CadastroPassoUm />} />
        <Route path="/cadastroDois" element={<CadastroPassoDois />} />
        <Route path="/recuperarSenha" element={<RecuperarSenha />} />
        <Route path="/NovaSenha" element={<NovaSenha />} />
      </routes>
    </BrowserRouter>
  )
}

export default App
