# Criação do Worker de IA

Este guia orienta o processo de criação e implantação do worker que gerencia a inteligência artificial da página `tutoria` utilizando o **Cloudflare Workers** e o ecossistema de **Workers AI**.

---

## Implantação Automatizada via Terminal

O Cloudflare possui uma CLI oficial chamada **Wrangler**, que permite configurar e buildar toda a infraestrutura diretamente pela linha de comando, sem necessidade de acessar o painel web.

### 1. Instalação e Autenticação

No seu terminal (Linux, Windows ou Mac), instale a CLI globalmente:

```bash
npm install -g wrangler
```

Agora, realize a autenticação com a sua conta Cloudflare:

```
wrangler login
```

### 2. Configuração do Projeto

Na raiz do diretório do seu worker, verifique se existe um arquivo chamado `wrangler.toml`. Este arquivo funciona como a nossa "Infraestrutura como Código", definindo os recursos necessários. sua estrutura deve ser assim:

```
name = "app-aluno-tutor-ia"
main = "worker/index.js"
compatibility_date = "2026-06-24"

[ai]
binding = "AI"
```

### 3. Definição das Variáveis de Ambiente

Aqui será injetado as variáveis de ambiente necessárias para o worker funcionar. As variaveis com `PUBLIC` podem ser expostas e utilizadas no frontend, enquanto o resto é melhor ficar em um ambiente seguro:

```
wrangler secret put FRONTEND_URL
```
> Digite a URL do seu front-end, como estamos no local, basta digitar `http://localhost:5173`. 

> ANTEÇÃO: Não pode ter uma barra no final de `http://localhost:5173` ou então pode ocorrer erros de CORS.

```
wrangler secret put API_AI_PUBLIC_FRONT_END_KEY 
```
> Digite a sua chave publica que será utilizada para a comunicação do front-end com o worker

Copie essa chave pública do frontend e cole na variavel de ambiente do front-end chamada: `VITE_API_AI_PUBLIC_FRONT_END_KEY`


### 4. Deploy

Para compilar e colocar o seu Worker em produção na rede global da Cloudflare, execute:

```
wrangler deploy
```

O terminal irá retornar a URL pública gerada para o seu microsserviço (ex: https://app-aluno-tutor-ia.seu-usuario.workers.dev). Copie essa URL e adicione no .env do Front-end na variável VITE_API_URL.
