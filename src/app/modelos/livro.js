const { check } = require('express-validator/check');

class Livro{
    static validacoes(){
        return [
            check('titulo').isLength({ min: 4 }).withMessage('O títiulo precisa ter no mínimo 5 caracteres'),
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido')
        ];
    }
}

module.exports = Livro;