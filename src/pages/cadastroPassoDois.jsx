function CadastroDados() {
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
        
          <form>
           
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" placeholder="Digite seu nome completo" />
            
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" placeholder="(99) 99999-9999" />
            
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="text" placeholder="user@email.com" />
            
            <label>Senha</label>
            <input type="password" />
            
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroDados;