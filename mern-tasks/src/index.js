const express=require('express');
const app=express();

//configuraciones
app.set('port',process.env.PORT||3000)//tome el puerto de mi aplicación en el sistema operativo


//Middlewares(funciones que se ejecuten antes de que lleguen a las rutas)


app.listen(app.get('port'),()=>{
    console.log(`servidor en el puerto ${app.get('port')}`);
});//servidor escucha en el puerto 3000