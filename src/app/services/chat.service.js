import { API_KEY, API_URL } from "./env.config";

export async function sendMessage(promptText) {

    if (!API_KEY || !API_URL) {
        throw new Error("Ocorreu um erro ao se comunicar com a IA. Sem uma chave pública válida não será possivel se comunicar com o TutorIA.")
    }

    const response = await fetch(
        API_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": API_KEY
            },
            body: JSON.stringify({
                prompt: promptText
            })
        }        
    ) 


    if (!response.ok) {
        let errorMessage = "Erro desconhecido na API";

        console.log(response)
        
        try {
            const data = await response.json();
            
            errorMessage = data.error || data.message || errorMessage;
            
        } catch {
            errorMessage = await response.text() || errorMessage;
        }

        throw new Error(`Erro na API (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();
    
    return {response: data.resposta}
}