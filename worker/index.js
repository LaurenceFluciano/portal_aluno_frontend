/* eslint-disable no-unused-vars */
export default {
  async fetch(request, env, ctx) {

    const allowedOrigin = env.FRONTEND_URL ? env.FRONTEND_URL.replace(/\/$/, "") : "";

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-API-Key",
    };


    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const clientApiKey = request.headers.get("X-API-Key");
    if (clientApiKey !== env.API_AI_PUBLIC_FRONT_END_KEY) {
      return new Response("Não autorizado", { status: 401, headers: corsHeaders });
    }

    if(request.method === "POST") {
      try {
        const { prompt } = await request.json();


        if (typeof prompt !== "string") {
          return new Response(
            "Prompt deve ser texto",
            { status: 400 }
          );
        }


        if (!prompt || prompt.length > 1000) {
          return new Response(
            "Prompt inválido! Muitos caracteres.",
            { status: 400 }
          );
        }

        const response = await env.AI.run('@cf/meta/llama-3.1-8b-instruct-fast', {
          messages: [
            { role: 'system', 
              content: `Você é o Tutor IA do portal acadêmico da faculdade. Responda de forma didática.
      
      OBRIGATÓRIO: Sempre que for escrever QUALQUER expressão matemática, equação, integral ou variável (como x ou y), você DEVE envelopá-la usando a sintaxe LaTeX.
      - Para equações isoladas em uma linha própria, use dois cifrões. Exemplo: $$f(x) = \\int \\sin^3(x) \\, dx$$
      - Para variáveis ou expressões no meio do texto, use um cifrão. Exemplo: $u = \\cos(x)$
      Nunca escreva matemática em texto puro.` 
            },
            { role: 'user', content: prompt }
          ],
          max_tokens: 800,
          temperature: 0.7
        });

        return new Response(JSON.stringify({ resposta: response.response }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });

      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    return new Response(JSON.stringify({ message: "Recurso não encontrado." }), {
      status: 404,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  }
};