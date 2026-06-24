import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useField } from "../../hooks/useField";
import CadastroPassoUm from "./CadastroPassoUm";
import CadastroPassoDois from "./CadastroPassoDois";

import '../../../styles/auth.css';
import '../../../styles/mobile.css';

export function Cadastro() {
  const navigate = useNavigate();
    const [passo, setPasso] = useState(1);

    const { field, setField, errors, setErrors, loading, setLoading } = useField({
        cpf: '', nome: '', telefone: '', email: '', senha: ''
    });

   const irParaPassoDois = () => {
        if (!field.cpf || field.cpf.length < 11) {
            setErrors({ geral: 'Por favor, insira um CPF válido com 11 dígitos.' });
            return;
        }
        setErrors({}); 
        setPasso(2);   
    };
    const finalizarCadastro = () => {
        
        if (!field.nome || !field.telefone || !field.email || !field.senha) {
            setErrors({ geral: 'Por favor, preencha todos os campos obrigatórios.' });
            return;
        }

        
        if (!field.email.includes('@')) {
            setErrors({ geral: 'Por favor, insira um e-mail válido.' });
            return;
        }

       
        if (field.senha.length < 6) {
            setErrors({ geral: 'A sua senha deve ter pelo menos 6 caracteres.' });
            return;
        }

      
        setLoading(true);

        setTimeout(() => {
            localStorage.setItem('cadastroData', JSON.stringify(field));
            setLoading(false);
            alert("Cadastro efetuado com sucesso!");
            navigate('/login');
        }, 1000);
    };
    return (
    
    <div className="container">
            <aside>
                <p>Educação não é aprendizado de fatos... <span>Albert Einstein</span></p>
            </aside>

            <main>
                {passo === 1 ? (
                    <CadastroPassoUm 
                        field={field} 
                        setField={setField} 
                        errors={errors} 
                        onNext={irParaPassoDois} 
                    />
                ) : (
                    <CadastroPassoDois 
                        field={field} 
                        setField={setField} 
                        errors={errors} 
                        loading={loading}
                        onBack={() => setPasso(1)} 
                        onSubmit={finalizarCadastro} 
                    />
                )}
            </main>
        </div>
  );
}


export default Cadastro;