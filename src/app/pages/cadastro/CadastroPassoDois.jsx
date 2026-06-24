import InputField from "@/components/ui/InputField";
import '../../../styles/mobile.css';

function CadastroPassoDois({ field, setField, errors, loading, onBack, onSubmit }) {


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();

  };
  return (
  
        <div className="cadastro">
          <h1>Cadastre-se</h1>
          <p>Passo 2 de 2. Por favor, insira os dados para finalizar.</p>

          {errors.geral && (
        <p style={{ color: '#e50800', backgroundColor: '#fdf7f7', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
          {errors.geral}
        </p>
      )}
          
          <form onSubmit={handleSubmit}>
            
            <InputField 
              label="Nome"
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={field.nome}
              onChange={(e) => setField('nome', e.target.value)}
            />

            <InputField 
              label="Telefone"
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(99) 99999-9999"
              value={field.telefone}
              onChange={(e) => setField('telefone', e.target.value)}
            />

            <InputField 
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="user@email.com"
              value={field.email}
              onChange={(e) => setField('email', e.target.value)}
            />

            <InputField 
              label="Senha"
              id="senha"
              name="senha"
              type="password"
              placeholder="Crie uma senha"
              value={field.senha}
              onChange={(e) => setField('senha', e.target.value)}
            />
              <button type="button" onClick={onBack} style={{ backgroundColor: '#ccc', marginBottom: '10px', color: '#333' }}>
                  Voltar
              </button>
            <button type="submit" disabled={loading}>
                  {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        </div>
  );
}

export default CadastroPassoDois;
