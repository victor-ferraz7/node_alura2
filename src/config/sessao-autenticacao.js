const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/infra/usuario-dao');
const db = require('./database');

module.exports = (app) =>{

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'senha',
        },
        (email, senha, done) =>{
            const usuarioDao = new UsuarioDao(db);
             usuarioDao.buscaPorEmail(email)
                                    .then(usuario => {
                                        if(!usuario || senha != usuario.senha){
                                            return done(null, false, {
                                                mensagem: 'Login ou senha incorreto'
                                            })                                       
                                    }  
                                    return done(null, usuario); 
                                })
                                .catch(erro => done(erro, false));
        }
    ));
};