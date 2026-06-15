
import '../../styles/auth.css';

export function NovaSenha() {
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
          
          <form>
           
            <label htmlFor="senha">Senha</label>
            <input name="senha" id="senha" type="password" />

            <br />

            <label htmlFor="repitasenha">Repita a Senha</label>
            <input name="repitasenha" id="repitasenha" type="password" />

            <button type="submit">Salvar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default NovaSenha;