import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import InputField from '../../../components/InputField';

function CadastroPassoUm() {
  
  const [cpf, setCpf] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cpf) {
      setErro('Por favor, preencha o seu CPF.');
      return;
    }

    if (cpf.length < 11) {
      setErro('Por favor, digite um CPF válido com pelo menos 11 números.');
      return;
    }

    setErro('');
    navigate('/cadastro?passo=2'); 
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
          <p>Passo 1 de 2. Por favor, insira seu cpf para prosseguir.</p>

          {erro && (
            <p style={{ color: '#e50800', backgroundColor: '#fdf7f7', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
              {erro}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <InputField 
              label="CPF"
              id="cpf"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            <button type="submit">Prosseguir</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroPassoUm;
