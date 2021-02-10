/*
This is the file where I am setting up (initializing) the server and when it gets run by NPM start or NPM serve,
it should start the server where ever I designate the PORT (locally or on my deployment channel)

Things I need:
1) Install the following packages. They are necessary:

  -express (this is the server framework. It comes bundled with modules that help us create a server in node)
  -pg (node-postgres is a collection of modules to help us interface with a PSQL database)
  -knex (an SQL query builder compatible with PSQL. Also works as an ORM for migration and seeding management)
  -body-parser (middle-ware that refines chunks of data from HTTP methods into a Json object that makes it easier for us to use)

>npm install --save express pg knex body-parser

2) In [Section A.1], require express and bodyParser. This is where you would also require from additional packages you might use.

3) In [SECTION A.2], declare a variable for your port. This should be a conditional, the process.env.PORT will represent your deployment
port and 3000 will represent your local host port for local development and testing. If you are running in localhost, it will see process.env.PORT
as undefined and move on to using 3000 to host the app locally.

4) In [Section A.2], I also like to instantiate my express server into an constant variable called app.

5) In [Section B], I set up any middleware that I will need. In this case, I will have my server (app) use bodyParser and some configurations for it.

6) In [Section C], I will make a simple get call just to ensure that my endpoint is working.

7) In [Section D], This is where I am hosting the server instance in app on the port I specified.


SEE knexfile.js NEXT!


*/

//[SECTION A.1]
const express = require('express');
const bodyParser = require('body-parser');
//[SECITON A.2]
const PORT = process.env.PORT || 3000;
const app = express();

//[SECTION B]
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

//[SECTION C]


//[SECTION D]
app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}/`)
})