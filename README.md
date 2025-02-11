# Meu Projeto

Este é um projeto de exemplo utilizando React, Express e MySQL para criar uma aplicação web completa.

## Estrutura do Projeto


### Pastas e Arquivos

- **backend/**: Contém o código do servidor Express e a configuração do banco de dados MySQL.
  - **models/**: Envia as queries para o banco de dados. Joga para o controller.
  - **controllers/**: Define a lógica do controle para diferentes rotas. Joga para o routes.
  - **routes/**: Define os endpoint da API.
  - **app.js**: Ponto de entrada do servidor backend.
  - **db.js**: Configuração da conexão com o banco de dados MySQL.
  - **package.json**: Arquivo de configuração do npm -> Contém os metadados do diretório.

- **frontend/**: Contém o código da aplicação React.
  - **node_modules/**: Contém pacotes e dependências que o porjeto utiliza.
  - **public/**: Contém arquivos públicos ao browser.
  - **src/**: Contém os arquivos fonte da aplicação React.
    - **components/**: Contém os componentes React reutilizáveis.
    - **pages/**: Contém as páginas da aplicação.
    - **App.js**: Componente principal da aplicação React.
    - **index.js**: Ponto de entrada do frontend. Arquivo principal que o React utiliza para renderizar a aplicação
  - **package.json**: Arquivo de configuração do npm -> Contém os metadados do diretório.

## Desenvolvimento

#### 01. Criação do Banco de Dados

Há apenas uma tabela: users

Field      Type           Null     Key        Extra
 id         int            No      PRI     auto_increment
 name    varchar(255)     Yes       -           -
 email   varchar(255)     Yes       -        UNIQUE

### 02. Desenvolvimento do Frontend
### 03. Desenvolvimento do Backend
   
