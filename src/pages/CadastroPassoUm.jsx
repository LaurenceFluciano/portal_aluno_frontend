import { Link } from 'react-router-dom'; 

function CadastroPassoUm() {
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

      
          <label htmlFor="cpf">CPF</label>
          <input id="cpf" name="cpf" type="text" placeholder="000.000.000-00" />

         
          <Link to="/cadastro?passo=2">Prosseguir</Link>
        </div>
      </main>
    </div>
  );
}

export default CadastroPassoUm;