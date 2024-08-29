# 🚀 Code Completer - Autocompletar Código com AI
**Code Completer** é uma aplicação web que utiliza inteligência artificial para autocompletar trechos de código inseridos pelo usuário. A aplicação é baseada na API de inferência da Hugging Face, utilizando especificamente o modelo `bigcode/starcoder2-3b`. Com essa ferramenta, desenvolvedores podem obter sugestões de código em tempo real, otimizando seu fluxo de trabalho e reduzindo o tempo gasto em tarefas repetitivas.

## ✨ Funcionalidades
- 🔄 Autocompletar código em tempo real.
- 🧠 Utilização de modelos avançados de linguagem para oferecer sugestões precisas e contextuais.
- 🖥️ Interface minimalista e fácil de usar.

## 🛠️ Tecnologias Utilizadas
- **Front-end**: HTML, CSS, JavaScript
- **API da IA**: Hugging Face Inference API

## 📋 Pré-requisitos
- Uma chave de API (access token) válida da Hugging Face, necessária para autenticação e uso do modelo de autocompletar código.

## 🔑 Como Obter um Access Token da Hugging Face
1. Acesse o site da <a href="https://huggingface.co/" target="_blank">**Hugging Face**</a>.
2. Crie uma conta ou faça login.
3. Navegue até as configurações da conta e gere um novo token de acesso.
4. Copie o token gerado para usar na aplicação Code Completer.

## 🚀 Instalação e Uso Localmente
**1. Clone o repositório:**

```bash
git clone https://github.com/ozielrsdev/AI-Project-2.git
```

**2. Navegue até o diretório do projeto:**

````bash
cd AI-Project-2
````

**3.Configurar a API Key:**

- Coloque o **ACCESS TOKEN** da **Hugging Face API** no arquivo **script.js**:
````javascript
const apiKey = 'seu_access_token_aqui';
````
- Substitua **'seu_access_token_aqui'** pelo token de acesso que você obteve da Hugging Face.

**4. Executar a aplicação:**

- Abra o arquivo **index.html** diretamente no seu navegador
- Utilize um servidor HTTP local para rodar a aplicação, como o **<a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server</a>** do Visual Studio Code.

## 📝 Uso
1. Abra a aplicação no navegador.
2. Insira seu código.
3. Clique no botão "Executar".
4. Veja os resultados

## Exemplos
<div style="display: flex; flex-direction: row; width: 100%">
  <img src="https://github.com/user-attachments/assets/6613428a-0879-4700-a3f5-ad910d8309c3" alt="Code Completer" >
  <img src="https://github.com/user-attachments/assets/7be30683-30dd-40c5-8894-cf368b1c75ac" alt="Code Completer">
</div>

## 🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.
