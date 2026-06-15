import { useSearchParams } from "react-router-dom";
import CadastroPassoUm from "./CadastroPassoUm";
import CadastroPassoDois from "./CadastroPassoDois";

import '../../styles/auth.css';

export function Cadastro() {
    const [searchParams] = useSearchParams();
    const passo = searchParams.get('passo') || '1';

    // TO-DO

    // [ ] Manter os valores que o usuário colocou entre os passos.
    // [ ] Criar handler input no ultimo passo para enviar os dados.
    
    return (
    <>
      {passo === '1' && <CadastroPassoUm/>}
      {passo === '2' && <CadastroPassoDois/>}
    </>
  );
}