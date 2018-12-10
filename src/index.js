const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const app = express();

const { mongoose }= require('./database');
//configuraciones 

app.set('port',process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());


//router
app.use('/api/task', require('./routes/task.routes'));

//archivos staticos 

//app.use
app.use(express.static( path.join(__dirname, 'public')));

//servidor 
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);

});
