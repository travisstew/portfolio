const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//static files
app.use(express.static('public'));

//template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

require('dotenv').config();

app.use('/', require('./routes/index'));


app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });


