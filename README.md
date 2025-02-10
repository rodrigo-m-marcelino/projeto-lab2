# Meu Projeto

Este é um projeto de exemplo utilizando React, Express e MySQL para criar uma aplicação web completa.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:


### Descrição das Pastas e Arquivos

- **backend/**: Contém o código do servidor Express e a configuração do banco de dados MySQL.
  - **controllers/**: Define a lógica do controle para diferentes rotas.
  - **models/**: Define os modelos de dados do Sequelize.
  - **routes/**: Define as rotas da API.
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

### Desenvolvimento

#### Banco de Dados

Há apenas uma tabela: users

| Field | Type         | Null | Key  | Default |    Extra       |
+-------+--------------+------+-----+---------+-----------------+
| id    | int          | NO   | PRI  |  NULL   | auto_increment |
| name  | varchar(255) | YES  |  -   |  NULL   |     -          |
| email | varchar(255) | YES  |  -   |  NULL   |     -          |
+-------+--------------+------+-----+---------+-----------------+

#### Backend

1. **Inicializar o projeto backend**
   
