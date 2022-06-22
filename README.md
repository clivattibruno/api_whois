COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto usando o nodemon 
### nodemon app.js




SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install express

Rodar o projeto 
### node app.js

Acessar o projeto no navegador
### http://localhost:8080

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
### npm install -g nodemon

Instalar o banco de dados MySQL

Verificar o banco de dados MySQL no pront de comando
### mysql -h localhost -u root -p

Instalar o Workbench para gerenciar o banco de dados de forma gráfica

Comandos básicos de MySQL
Criar a base de dados
### create database celke character set utf8mb4 collate utf8mb4_unicode_ci;

Criar a tabela
### CREATE TABLE `users` (
###     `id` int NOT NULL AUTO_INCREMENT,
###      `name` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
###      `email` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
###      PRIMARY KEY (`id`)    
### ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

Selecionar registro no banco de dados
### SELECT id, name, email FROM users;

Cadastrar registro no banco de dados
### INSERT INTO users (name, email) VALUES ('Cesar', 'cesar@celke.com.br');

Limitar quantidade de registros selecionado no banco de dados
### SELECT id, name, email FROM users LIMIT 3;

Limitar quantidade de registros selecionado no banco de dados e indicar o inicio
### SELECT id, name, email FROM users LIMIT 2 OFFSET 4;
Exemplo:
pg 1 = 1,2
pg 2 = 3,4
pg 3 = 5,6

Acrescentar condição na busca de registros
### SELECT id, name, email FROM users WHERE email = 'cesar@celke.com.br' LIMIT 1;

Acrescentar mais de uma condição na busca de registros
### SELECT id, name, email FROM users WHERE email = 'cesar@celke.com.br' AND name = 'Cesar' LIMIT 1;
### SELECT id, name, email FROM users WHERE email = 'cesar@celke.com.br' OR name = 'Cesar' LIMIT 1;

Ordenar os registros retornado do banco de dados
### SELECT id, name, email FROM users ORDER BY id ASC;
### SELECT id, name, email FROM users ORDER BY id DESC;

Editar registro no banco de dados
### UPDATE users SET name='Cesar 3a', email='cesar3a@gmail.com.br' WHERE id=3;

Apagar registro no banco de dados
### DELETE FROM users WHERE id=7;

Sequelize é uma biblioteca Javascript que facilita o gerenciamento de um banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Instalar o módulo para criptografar a senha
### npm install --save bcryptjs

Instalar a dependencia para JWT
### npm install --save jsonwebtoken

Gerenciar variáveis de ambiente
### npm install --save dotenv

Permitir acesso a API
### npm install --save cors"# api_falha" 
"# api-falha" 
"# api-falha" 
