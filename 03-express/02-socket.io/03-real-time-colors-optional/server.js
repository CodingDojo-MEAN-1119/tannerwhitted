const express = require('express');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));    
var color = "green";


app.get('/', (request, response) => {
    response.render('index')    
});



io.on('connection', (socket) => {

    socket.emit('color', {color: color})
    
    socket.on('green', () => {
        color = "green"
        io.emit('update_color', {color: color})
    });

    socket.on('blue', () => {
        color = "blue"
        io.emit('update_color', {color: color})
    });

    socket.on('pink', () => {
        color = "pink"
        io.emit('update_color', {color: color})
    });

});