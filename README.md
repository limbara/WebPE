# WebPE
a Web app for editing photos 

## Requirements
1. Install [Node.js](http://nodejs.org)
2. Install [Knex.js](http://knexjs.org) `$ npm install -g knex` (this project is using mysql as the database.)
3. Install the dependencies `$ npm install`

## Migrate database through knex command
In the model folder do `$ knex migrate:latest --env production` (the `--env production` will use the database config production in knexfile.js ) 

## Running the server
` $ npm start` OR `$ npm run dev` 

 
