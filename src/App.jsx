import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login';
import NovaSenha from './pages/NovaSenha';
import RecuperarSenha from './pages/RecuperarSenha';
import CadastroPassoUm from './pages/cadastroPassoUm';
import CadastroPassoDois from './pages/cadastroPassoDois';
import './index.css';
import './mobile.css';

function App() {

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CadastroUm" element={<CadastroPassoUm />} />
        <Route path="/CadastroDois" element={<CadastroPassoDois />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/NovaSenha" element={<NovaSenha />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
