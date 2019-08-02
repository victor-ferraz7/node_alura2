const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

const { check } = require('express-validator/check');

module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();
    app.get(rotasBase.home, baseControlador.home());
};