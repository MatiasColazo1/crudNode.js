const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'apinode'
});

conexion.connect((err)=>{
    if(err){
        console.log('ocurrio un error: '+ err)
    } else{
        console.log('la base de datos se conecto!')
    }
});

module.exports = conexion