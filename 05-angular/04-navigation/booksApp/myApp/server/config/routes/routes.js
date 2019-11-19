const controller = require('../../controllers/author.controllers')

    module.exports=function(app){
        app.get('/authors', (req,resp)=>{
            controller.index(req,resp);
        });
        app.post('/authors', (req,resp)=>{
            controller.create(req,resp);
        });

        app.get('/authors/:id',(req,resp)=>{
           controller.show(req,resp);
        });

        app.put('/authors/:id', (req,resp)=>{
            controller.update(req,resp);
        });

        app.delete('/authors/:id', (req,resp)=>{
            controller.destroy(req,resp);
        });


    }
