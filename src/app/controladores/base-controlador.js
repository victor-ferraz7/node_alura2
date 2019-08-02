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
        return (req, res){
            // lógica
        }
    }
}

module.exports = BaseControlador;