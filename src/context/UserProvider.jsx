import { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedData = localStorage.getItem("cadastroData");

    console.log(savedData)
    
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (error) {
        console.error("Erro ao parsear cadastroData do localStorage:", error);
      }
    }
    
    return {
      nome: 'João Silva',
      email: 'joao@faculdade.com',
    };
  });



  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}