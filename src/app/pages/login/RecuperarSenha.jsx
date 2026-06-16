import '../../../styles/auth.css';

export function RecuperarSenha() {

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
          <h1>Esqueceu a senha</h1>
          <p>Informe seu e-mail para enviarmos um link para redefinir sua senha.</p>

          <form>
 
            <label htmlFor="email">Endereço de e-mail</label>
            <input id="email" name="email" type="text" placeholder="user@email.com" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RecuperarSenha;