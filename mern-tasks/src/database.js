const mongoose=require('mongoose');
const uri='mongodb://localhost/mern_tasks';
mongoose.connect(uri)
    .then(db=>console.log('Conectando a la Bd..'))
    .catch(err=>console.error(err));

module.exports=mongoose;    