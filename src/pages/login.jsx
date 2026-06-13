function Login() {
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

          
          <form>
            
            <label htmlFor="email">Endereço de e-mail</label>
            <input id="email" name="email" type="text" placeholder="user@email.com" />

            <label>
              Senha
              
              <Link to="/recuperar-senha">Esqueceu?</Link>
            </label>
            <input type="password" />

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