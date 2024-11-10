require('dotenv').config(); // Load environment variables

const express = require('express'); // Require the express module
const expressLayouts = require('express-ejs-layouts'); // Require express-ejs-layouts

const app = express(); // Create an Express application
const port = 5000|| process.env.PORT ; // Define the port

app.use(express.static('public'));
// Set EJS as the view engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


//use route
app.use('/', require('./server/routes/main'));


app.listen(port,()=>{
    console.log(`port number ${port}` );
})