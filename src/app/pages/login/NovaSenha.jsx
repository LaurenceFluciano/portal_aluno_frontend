
import '../../../styles/auth.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../../components/InputField';

function NovaSenha() {
  const [codigoDigitado, setCodigoDigitado] = useState('');
  const [senha, setSenha] = useState('');
  const [repitaSenha, setRepitaSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!senha || !repitaSenha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }
    
    const codigoSalvo = localStorage.getItem('codigoRecuperacao');
    
    if (codigoDigitado !== codigoSalvo) {
      setErro('Código de verificação incorreto. Verifique seu e-mail.');
      return;
    }
    
    if (senha.length < 6) {
      setErro('A sua senha deve ter pelo menos 6 caracteres.');
      return;
    }

    
    if (senha !== repitaSenha) {
      setErro('As senhas não coincidem. Digite novamente.');
      return;
    }
    
    localStorage.removeItem('codigoRecuperacao');
    localStorage.removeItem('emailRecuperacao');
    
    setErro('');
    alert("Senha alterado com sucesso!")
    
    
    navigate('/login'); 
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
          <h1>Nova Senha</h1>
          <p>Informe abaixo sua nova senha.</p>
          
          {erro && (
            <p style={{ color: '#e50800', backgroundColor: '#fdf7f7', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
              {erro}
            </p>
          )}

              <form onSubmit={handleSubmit}>

            <InputField 
              label="Código de Verificação"
              id="codigo"
              name="codigo"
              type="text"
              placeholder="Ex: 123456"
              value={codigoDigitado}
              onChange={(e) => setCodigoDigitado(e.target.value)}
            />

            <br />
            
          
            <InputField 
              label="Senha"
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite sua nova senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <br />

            <InputField 
              label="Repita a Senha"
              id="repitasenha"
              name="repitasenha"
              type="password"
              placeholder="Repita a nova senha"
              value={repitaSenha}
              onChange={(e) => setRepitaSenha(e.target.value)}
            />

            <button type="submit">Salvar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default NovaSenha;