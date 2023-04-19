# Helpfac

## Conceito do projeto
Helpfac é uma aplicação WEB onde é possivel realizar perguntas e responder perguntas de outros usuários. Ele foi criado visando um ambiente de estudos onde temos cursos e matérias associadas a estes cursos, de forma que ambos podem sem cadastradas a qualquer momento pelo administrador. Sua principal finalidade é sanar possíveis duvidas de alunos, podendo esses questionamentos serem respondidos por qualquer usuário da aplicação independentemente de curso.
  
## Pré-requisitos e recursos utilizados
No front-end do projeto foi utilizado HTML, CSS e Javascript.
No back-end do projeto foi utilizado Javascript com Node, e, na parte do banco de dados foi utilizado o MySQL, com o construtor de consultas Knex.
  
## Passo a passo
1. Criação da funcionalidade de visualização dos cursos
2. Criação da funcionalidade de visualização das matérias por curso
3. Criação da funcionalidade de visualização de perguntas do curso
4. Criação da funcionalidade de criação de perguntas
5. Criação da funcionalidade visualizar uma pergunta, junto as suas respostas
6. Criação da funcionalidade responder uma pergunta
7. Criação da funcionalidade login/registro
8. Criação da funcionalidade de cadastro, edição e remoção de cursos (ADMIN)
9. Criação da funcionalidade de cadastro, edição e remoção de matérias (ADMIN)
10. Criação da funcionalidade de exclusão, edição e visualização de perguntas (ADMIN tem acesso a todas, usuário tem acesso apenas as que são suas)
11. Criação da funcionalidade de edição e exclusão de resposta (ADMIN pode gerenciar todas, usuário pode gerenciar apenas as que são suas)

## Instalação
Passos necessários para instalar ou recriar seu projeto, se assim for necessário. A descrição dos passos não precisa ser complexa. É necessário apenas o mais importante para que outras pessoas saibam como fazê-lo.

### Exemplos:
1. Clone o repositório
```
  git clone https://github.com/LuisFSouza/helpfacProject.git
```
2. Certifique de que voce tem o npm e o nodejs instalado.
3. Instale as dependências
```
  npm install
```
4. Crie um banco de dados em MySQL
```
  CREATE DATABASE nomedobanco
```
5. Crie um arquivo .env na raiz do projeto. Modelo:
```
DB_HOST = Digite aqui o hostname
DB_PORT = Digite aqui a porta do banco de dados
DB_USER = Digite aqui o usuário do banco de dados
DB_PASS = Digite aqui a senha do banco de dados
DB_DATABASE = Digite aqui o nome do banco de dados criado no passo anterior
SECRETKEY = Digite aqui uma chave para verificar assinatura (sistema de login)
PASS_ADMIN = '$2b$10$umH10iFUgtO2y8cmhtLg8OSg2iA7vT63zPxBu2s4HTRq1rYAqHQgC'
```
6. Rode as migrations na seguinte ordem
```
  npx knex migrate:up 20230202112034_create_table_users.js
```
```
  npx knex migrate:up 20230131144246_create_table_course.js
```
```
  npx knex migrate:up 20230131144251_create_table_matter.js
```
```
  npx knex migrate:up 20230131144256_create_table_question.js
```
```
  npx knex migrate:up 20230131144303_create_table_answer.js
```
```
  npx knex migrate:up 20230131144307_create_table_image.js
```
7. Rode as seeds com o seguinte comando
```
  npx knex seed:run
```
Com isso, você terá cadastrado no sistema o usuário administrador, cujo email será `admin@admin.com` e a senha será `admin`

## Execução
1. Certifique que o banco de dados está rodando.
2. Execute o  seguinte comando para a aplicação começar a funcionar
```
  node server.js
```
3. Acesse o seguinte link:
```
  http://localhost:3333/login
```
## Autores
* Luis Felipi Cruz de Souza [@LuisFSouza](https://github.com/LuisFSouza)
* Ryan de Melo Andrade [@MasteryRyge](https://github.com/MasteryRyge)

## Imagens/screenshots
1. Tela de login
![login](https://user-images.githubusercontent.com/67544051/232949863-8a3fce3e-4a6e-45ec-8554-0ac3fdc89de8.png)
2. Tela de registro
![registrar](https://user-images.githubusercontent.com/67544051/232949883-824abdf5-576b-47f8-ba23-d8afa01d0903.png)
3. Tela de cursos
![cursos](https://user-images.githubusercontent.com/67544051/232949852-6c5ec9f3-3676-4c68-bfbe-54d2ccdb502e.png)
4. Menu de Cursos - ADMIN
![cursos-menu](https://user-images.githubusercontent.com/67544051/232949856-be788c5b-9321-41e4-8fbe-754913e1bffa.png)
5. Tela de criação de curso - ADMIN
![novo-curso](https://user-images.githubusercontent.com/67544051/232949874-71b766a9-3ea5-410d-931f-66e1ffb759b3.png)
6. Tela de edição de curso - ADMIN
![editar-curso](https://user-images.githubusercontent.com/67544051/232949859-2e97001e-024a-4f4b-ab2a-81fc46f55da2.png)
7. Tela de matérias por curso
![materias-curso](https://user-images.githubusercontent.com/67544051/232949866-df5f9158-09b9-4be1-9e90-a59fe267fc85.png)
8. Menu de matérias - ADMIN
![materias-cadastradas](https://user-images.githubusercontent.com/67544051/232949865-e560212e-272f-4ded-93a0-e987c8459efd.png)
9. Tela de criação de matéria - ADMIN
![nova-materia](https://user-images.githubusercontent.com/67544051/232949869-79777889-0e13-4a9d-a623-756ba15f0276.png)
10. Tela de edição de matéria - ADMIN
![editar-materia](https://user-images.githubusercontent.com/67544051/232949860-8339ab6a-bf62-4c97-b109-33a82b3b9926.png)
11. Tela de perguntas da matéria
![perguntas-materia](https://user-images.githubusercontent.com/67544051/232949881-7a2b84a9-4c4b-4e13-a0c9-1c1bc41bbfb9.png)
12. Tela de criação de pergunta
![nova-pergunta](https://user-images.githubusercontent.com/67544051/232949872-ec606c4b-d440-44ee-8ccc-0e79db295726.png)
13. Menu de perguntas feitas pelo usuário
![perguntas-cadastradas](https://user-images.githubusercontent.com/67544051/232949879-86b3d66e-9086-4231-b6dd-08543135e8fe.png)
14. Tela de edição de pergunta
![editar-pergunta](https://user-images.githubusercontent.com/67544051/232949861-abb3d0ee-6b4e-4fef-806a-c88a2ef2453e.png)
15. Tela de detalhamento da questão, onde estão disponiveis as respostas
![detalhes-questao](https://user-images.githubusercontent.com/67544051/232949858-bbcac72c-5ad4-4aad-b4ff-7c446900f3a7.png)
16. Tela de criação de resposta
![responder-pergunta](https://user-images.githubusercontent.com/67544051/232949884-c108c820-1cf4-45bf-a452-a21faaeb209b.png)
17. Tela de edição de resposta
![editar-resposta](https://user-images.githubusercontent.com/67544051/232949862-98099c2b-ab0b-4fa8-a9b7-cad674074ad9.png)
