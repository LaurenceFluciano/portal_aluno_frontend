import InputField from "@/components/ui/InputField";
import '../../../styles/mobile.css';

function CadastroPassoUm({ field, setField, errors, onNext }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
   };

    

  return (
  
        <div className="cadastro">
          <h1>Cadastre-se</h1>
          <p>Passo 1 de 2. Por favor, insira seu cpf para prosseguir.</p>

          
      {errors.geral && (
        <p style={{ color: '#e50800', backgroundColor: '#fdf7f7', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
          {errors.geral}
        </p>
      )}

          <form onSubmit={handleSubmit}>
            <InputField 
              label="CPF"
              id="cpf"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={field.cpf}
              onChange={(e) => setField( 'cpf', e.target.value )}
            />

            <button type="submit">Prosseguir</button>
          </form>
        </div>

  );
}

export default CadastroPassoUm;
