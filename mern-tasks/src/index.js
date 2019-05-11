const express=require('express');
const app=express();
const morgan=require('morgan');
const path=require('path');
const {mongoose}=require('./database');

//configuraciones
app.set('port',process.env.PORT||3000)//tome el puerto de mi aplicación en el sistema operativo


//Middlewares(funciones que se ejecuten antes de que lleguen a las rutas)
app.use(morgan('dev'));
app.use(express.json());//cada vez que llega un dato va comprobar si viene en formato json

//Rutas
app.use('/api/tasks',require('./routes/task.routes.js'));

//archivos estaticos

//console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')));

//comenzando el servidor
app.listen(app.get('port'),()=>{
    console.log(`servidor en el puerto ${app.get('port')}`);
});//servidor escucha en el puerto 3000