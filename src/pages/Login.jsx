import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

export function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Tentando logar com:", email, senha); // só de teste por enquanto


    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return; 
    }
    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido.');
      return; 
    }

    setErro(''); 
    navigate('/dashboard');
    
  }
  return (

    
    <div className="container">
      <aside>
        <p>
          Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
          <span>Albert Einstein</span>
        </p>
      </aside>

      <main>
        <div className="cadastro">
          <h1>Bem-vindo de volta</h1>
          <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>
      
      {erro && (
            <p style={{ color: '#e50800', backgroundColor: '#fdf7f7', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
              {erro}
            </p>
          )}

          <form onSubmit={handleSubmit}>
          
            
            <InputField 
              label="Endereço de e-mail"
              id="email"
              name="email"
              type="text"
              placeholder="user@email.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 

            />
            <label>
              Senha
              
              <Link to="/recuperar-senha">Esqueceu?</Link>
            </label>
            <input 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} // 
            />
            <button type="submit">Entrar</button>
          </form>

          <p className="registro">
            Não tem conta? <Link to="/cadastro">Registre-se agora</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;