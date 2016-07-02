# WebPE
a Web app for adding photo effect 

## Requirements
1. Install [Node.js](http://nodejs.org)
2. Install [Knex.js](http://knexjs.org) `$ npm install -g knex` (this project is using mysql as the database.)
3. Install the dependencies `$ npm install`

## Migrate database through knex command

Before migration you can change the database configuration to match your database in model/knexfile.js.

Read the [Knex.js](http://knexjs.org) documentation for the supported database.

In the model folder do `$ knex migrate:latest --env production` (the `--env production` will use the database config production in knexfile.js ) 

## Running the server
Before running the server create a folder named Upload in public/images/Upload

Type the command ` $ npm start` to start server

 
