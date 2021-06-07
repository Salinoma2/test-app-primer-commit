const { Router } = require('express');
const  router = Router();


const productos =require('./data.json');
console.log(productos);

router.get('/', (req,res) =>{
    res.json(productos);
});

router.get('/:id', (req,res)=>{
    const {id}=req.params;
    productos.forEach(producto => {
        if(producto.id == id){
            console.log(producto); 
        }
    });

    console.log(id); 
});

router.post('/', (req,res) =>{
    const{id, title, caracteristicas} =req.body;
    if(id && title && caracteristicas){
        const id = lavados.length +1;
        const nuevolavado={...req.body, id};
        lavados.push(nuevolavado);
        //console.log(nuevolavado);
        res.status(200).json(lavados);


    }
    else{
        res.status(500).json({error:'no data'});
        
    }
    
});


module.exports = router;