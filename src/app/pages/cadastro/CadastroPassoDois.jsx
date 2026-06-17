import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../../components/InputField';

function CadastroPassoDois() {
 
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !telefone || !email || !senha) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }

    if (senha.length < 6) {
      setErro('A sua senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setErro('');
    console.log("Usuário cadastrado com sucesso!", { nome, telefone, email });
    
    navigate('/'); 

  };
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
          <h1>Cadastre-se</h1>
          <p>Passo 2 de 2. Por favor, insira os dados para finalizar.</p>

          {erro && (
            <p style={{ color: '#e50800', backgroundColor: '#fdf7f7', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
              {erro}
            </p>
          )}
          
          <form onSubmit={handleSubmit}>
            
            <InputField 
              label="Nome"
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <InputField 
              label="Telefone"
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(99) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <InputField 
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField 
              label="Senha"
              id="senha"
              name="senha"
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroPassoDois;
