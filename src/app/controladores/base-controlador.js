const LivroControlador = require('./livro-controlador');

const templates = require('../views/templates');

class BaseControlador{

    static rotas(){
        return {
           home: '/',
           login: '/login'
        };
    }

    home(){
        return (req, resp) =>{
            resp.marko(
                require(templates.base.home)
            );
        }
    }

    login(){
        return  (req,res) =>{
            res.marko(template.base.login)
        }; 
    }

    efetuaLogin(){

        return (req, res, next) =>{

            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) =>{
                if (erro){
                    return resp.marko(templates.base.login);
                }
                if (erro){
                    return next(erro);
                }

                req.login(usuario, (erro) =>{
                    if (erro) {
                        return next (erro);
                    }
                    return res.redirect(LivroControlador.rotas().lista);
                });           
            })(req, res, next);
        }
    }
}

module.exports = BaseControlador;