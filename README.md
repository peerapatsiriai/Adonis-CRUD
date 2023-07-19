# Adonis-CRUD

Move to Project

```
  cd CRUD-API
```
Install all packet in project

```
  npm install
```
Rename file .env.example to .env and change MYSQL_DB_NAME or config connect your database
```
  PORT=3333
  HOST=localhost
  NODE_ENV=development
  APP_KEY=di1ogaSUo207px9h8WSPeRJV4HXsw7lK
  DRIVE_DISK=local
  DB_CONNECTION=mysql
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_USER=root
  MYSQL_PASSWORD=
  MYSQL_DB_NAME=adonis
```
Create migration 
```
  node ace migration:run
```
Start server
```
  node ace serve --watch
```
You can check all API routes in project
```
  node ace list:routes
```
These all routes in project
```
  Example run server in localhost

  -------------------------------

  Method: [GET] get all studens in database
  http://localhost:3333/student

  -------------------------------

  Method: [GET] get one studen in database only id = param
  http://localhost:3333/student/:id

  -------------------------------

  Method: [POST] add new studen in database
  http://localhost:3333/student

  Body: {
    "student_number":"6532829-8",
    "fname":"Peter",
    "lname":"Parker",
    "email":"Peter@gmail.com",
    "phone":"062-388-7521"
  }

  -------------------------------
  
  Method: [PUT] edit information of studen only id = param
  http://localhost:3333/student/:id

  -------------------------------

  Method: [DELETE] remove studen only id = param
  http://localhost:3333/student/:id

```
