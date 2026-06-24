# Portal Aluno UI
Um trabalho acadêmico de frontend.

## Instalação

Primeiramente clonamos o repositório:

```
git clone https://github.com/LaurenceFluciano/portal_aluno_frontend.git
```

Depois entramos no diretório clonado:

```
cd portal_aluno_frontend
```

Realizamos a instalação das dependências:

```
npm install
```

## Execução

Finalmente, para poder rodar a aplicação basta utilizar o seguinte comando:

```
npm run dev
```


## Configurações das Variaveis de Ambientes

Apesar do programa executar, a página `tutoria` não irá funcionar corretamente. Diante desse cenário, é essencial configurar as variaveis de ambientes adicionando as variaveis de ambientes públicas para se conectar com o worker, verfique o arquivo o arquivo `.env.example`:

```
VITE_API_URL=
VITE_API_AI_PUBLIC_FRONT_END_KEY=
```

Renomeie esse arquivo para `.env.local` e adicione as variaveis.

Para adiciona-las, será necessário configurar um worker no cloudflare usando um Binding de IA.

Caso deseja criar a sua a própria IA os passos para a criação do worker estão nessa seção:

[Guia de Criação de IA no Worker](./ai_worker.md)