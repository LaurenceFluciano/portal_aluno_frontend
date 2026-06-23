
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from "@/components/ui/InputField";
import emailjs from '@emailjs/browser';

function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErro('Por favor, informe o seu e-mail.');
      return;
    }

    
    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }

   
    setErro('');
    
    alert("Um link de recuperação foi enviado para o seu e-mail!");

    const codigoGerado = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem('codigoRecuperacao', codigoGerado);
    localStorage.setItem('emailRecuperacao', email); 


    const templateParams = {
      user_email: email,
      codigo: codigoGerado, 
    };

    emailjs.send('service_rmmv29h', 'template_9i3r3xg', templateParams, 'K7om5hJg9s2Hnajqk')
      .then(() => {
        setSucesso(true);
      
        setTimeout(() => {
          navigate('/nova-senha'); 
        }, 1000);
      })
      .catch((err) => {
        setErro('Erro ao enviar o e-mail.');
      });
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
          <h1>Esqueceu a senha</h1>
          <p>Informe seu e-mail para enviarmos um link para redefinir sua senha.</p>

          {erro && (
            <p style={{ color: '#e50800', backgroundColor: '#fdf7f7', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
              {erro}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <InputField 
              label="Endereço de e-mail"
              id="email"
              name="email"
              type="text"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RecuperarSenha;