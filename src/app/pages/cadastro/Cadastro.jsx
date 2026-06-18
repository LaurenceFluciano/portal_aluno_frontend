import { createContext, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CadastroPassoUm from "./CadastroPassoUm";
import CadastroPassoDois from "./CadastroPassoDois";

import '../../../styles/auth.css';

 const CadastroContext = createContext();

export function Cadastro() {
    const [searchParams] = useSearchParams();
    const passo = searchParams.get('passo') || '1';

    const [cadData, SetcadData] = useState({
      cpf : '',
      nome : '',
      telefone : '',
      email : '',
      senha : '',
    })

    const handleCadChange = (novoCampo) => {
      SetcadData(prevData => ({
        ...prevData,
        ...novoCampo
      }));
    };


    const handleEnvioCad = () => {
        localStorage.setItem('cadastroData', JSON.stringify(cadData));
    }


    return (
    
    <CadastroContext.Provider value={{ cadData, handleCadChange, handleEnvioCad }}>

      <>
       {passo === '1' && <CadastroPassoUm/>}
       {passo === '2' && <CadastroPassoDois/>}
       </>

      </CadastroContext.Provider>
  );
}

export function UseCadastro() {
    const context = useContext(CadastroContext);
    return context;
}


export default Cadastro;