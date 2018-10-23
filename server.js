const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan'); // para mostrar los mensajes por consola
const bodyParser = require('body-parser'); // Para entender las peticiones post
// const cors = require('cors');
//
// app.use(cors());
//settings
app.set('port', process.env.PORT || 5000);

// middleware : funciones que se ejecutan cada vez que se recibe una petición
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));

//routes
require('./routes/appRoutes')(app);

//static files

app.listen(app.get('port'), () => {
  console.log('server on port 5000');
});
