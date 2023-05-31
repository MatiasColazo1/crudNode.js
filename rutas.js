const router = require("express").Router()
const conexion = require("./config/conexion")

//asignamos todas las rutas
//get pais
router.get("/",(req, res)=>{
    let sql = "select * from tb_pais"
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
     else {
        res.json(rows)
    }
    })
})

// get un pais
router.get("/:id",(req, res)=>{
    const {id} = req.params
    let sql = "select * from tb_pais where id_pais = ?"
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
     else {
        res.json(rows)
    }
    })
})

// agregar pais
router.post("/", (req, res)=>{
    const{nombre,logo} = req.body

    let sql = `insert into tb_pais(nombre, logo) values('${nombre}','${logo}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pais agregado'})
        }
    })
})

// eliminar
router.delete("/:id",(req,res)=>{
    const{id}=req.params

    let sql = `delete from tb_pais where id_pais = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pais eliminado'})
        }
    })
});

//editar
router.put("/:id", (req,res)=>{
    const{id}=req.params
    const{nombre, logo} = req.body

    let sql = `update tb_pais set 
    nombre = '${nombre}',
     logo = '${logo}'
     where id_pais = '${id}'`

     conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pais editado'})
        }
    })
});

module.exports= router