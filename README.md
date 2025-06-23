
# Sistema de Gerenciamento de Filmes

Um sistema web completo para cadastro, edição e visualização de filmes, desenvolvido com Node.js, Express e EJS.

## 📌 Funcionalidades

- Cadastro de novos filmes com upload de capa
- Edição de filmes existentes
- Visualização em lista com paginação
- Exclusão de filmes com confirmação
- Design responsivo para todos os dispositivos
- Validação de formulários
- Preview de imagens antes do upload

## 🛠️ Tecnologias Utilizadas

- Backend:
  - Node.js
  - Express
  - MongoDB (ou banco de dados de sua escolha)
  - Multer (para upload de arquivos)
  - Method Override (para métodos PUT/DELETE)

- Frontend:
  - EJS (templates)
  - Bootstrap 5 (estilização)
  - Font Awesome (ícones)
  - Animate.css (animações)
  - Vanilla JavaScript (interações)

## 🚀 Como Executar o Projeto

1. Pré-requisitos:
   - Node.js (v14 ou superior)
   - MongoDB (ou outro banco de dados configurado)
   - NPM ou Yarn

2. Instalação:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd nome-do-repositorio
   npm install
   ```
Configuração:

Crie um arquivo .env na raiz do projeto com as variáveis:

  ```bash
PORT=3000
MONGODB_URI=sua_string_de_conexao
SECRET_KEY=sua_chave_secreta
  ```
Execução:

  ```bash 
npm start
  ```
O servidor estará disponível em: http://localhost:3000

📂 Estrutura de Arquivos
  ```bash
/
├── controllers/ # Lógica das rotas
├── models/ # Modelos do banco de dados
├── public/ # Arquivos estáticos
│ ├── css/
│ ├── js/
│ └── images/
├── routes/ # Definição de rotas
├── views/ # Templates EJS
│ ├── partials/
│ ├── movies/
│ └── ...
├── app.js # Configuração do Express
├── package.json
└── README.txt
  ```
🌟 Recursos Avançados
Animações suaves em todas as transições

 - Design mobile-first

 - Validação em tempo real de formulários

 - Preview de imagens antes do upload

 - Confirmação antes de ações críticas (exclusão)

 - Feedback visual para o usuário

# 📄 Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

# ✉️ Contato
Dérick Campos Santos

 - [Currículo web](https://curriculoweb-dcs.netlify.app/)
 - [Linkedin](https://www.linkedin.com/in/derick-campos-santos/)
 - [GitHub](https://github.com/derickcsantos)
 - [Link do Projeto](https://github.com/Derickcsantos/Biblioteca-de-filmes)



