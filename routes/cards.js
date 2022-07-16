const express = require('express');
const router = express.Router();

//Retorna todos os cards
router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna lista com todos os cards',
        id: id
    });
});

//Insere um card
router.post('/',(req, res, next) => {

    res.status(201).send({
        mensagem: 'Salva um card'
      
    });
});

//Retorna um card especifico
router.get('/:id_card',(req, res, next) => {
    const id = req.params.id_card

    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Retorna um card do tipo especial',
            id: id
        });
    } else{
        res.status(200).send({
            mensagem: 'Retorna um card apartir do id',
            id: id
        });
    }
});

//Altara um card
router.patch('/:id_card', (req, res, next) =>{
    const id = req.params.id_card

    res.status(201).send({
        mesagem: 'Atualiza um card',
        id: id
    })
});

//Deleta um card especifico do banco
router.delete('/:id_card', (req, res, next) =>{
    const id = req.params.id_card

    res.status(201).send({
        mensagem: 'Delete card, card deletado',
        id: id
    })
});


module.exports = router;