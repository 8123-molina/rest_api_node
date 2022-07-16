const express = require('express');
const router = express.Router();

//Retorna todos os categorias
router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos lista todos as categoria',
        id: id
    });
});

//Insere um categoria
router.post('/',(req, res, next) => {

    res.status(201).send({
        mensagem: 'Salva categoria criado'
      
    });
});

//Retorna um categoria especifico
router.get('/:id_categoria',(req, res, next) => {
    const id = req.params.id_card

    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Retorna a categoria do tipo especial',
            id: id
        });
    } else{
        res.status(200).send({
            mensagem: 'Retorna a categoria apartir do id',
            id: id
        });
    }
});

//Altara um categoria
router.patch('/:id_categoria', (req, res, next) =>{
    const id = req.params.id_card

    res.status(201).send({
        mesagem: 'Atualiza uma categoria',
        id: id
    })
});

//Deleta um categoria especifico do banco
router.delete('/:id_categoria', (req, res, next) =>{
    const id = req.params.id_card

    res.status(201).send({
        mensagem: 'Delete uma categoria',
        id: id
    })
});


module.exports = router;