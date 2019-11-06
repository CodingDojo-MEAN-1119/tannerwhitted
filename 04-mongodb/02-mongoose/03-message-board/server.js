const express = require('express');
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board_app', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    postedBy: {
        type: String,
        required: [true, "Must enter a name"],
        minlength: [1, "Nameame cannot be blank"],
        trim: true
    },
    comment: {
        type: String,
        required: [true, "Comments cannot be blank"],
        minlength: [1, "You cannot post blank comments"],
        trim: true
    }
}, {timestamps: true});
const MessageSchema = new mongoose.Schema({
    postedBy: {
        type: String,
        required: [true, "You must enter a name"],
        minlength: [2, "Not a valid name"],
        trim: true
    },
    message: {
        type: String,
        required: [true, "Messages cannot be blank"],
        minlength: [5, "Must be a valid message"],
        trim: true
    },
    comments: [CommentSchema]
}, {timestamps: true});
const Message = mongoose.model('Message', MessageSchema);

app.get('/', (request, response) => {
    Message.find().sort({createdAt: 'desc'})
        .then(allMessages => {
            response.render('index', { allMessages })
        })
        .catch(err=>{
            console.log(err)
        });
});
app.post('/', (request, response) => {
    Message.create(request.body)
        .then(()=>response.redirect('/'))
        .catch(err=>{
            console.log(err)
            for (var key in err.errors) {
                request.flash('post_message', err.errors[key].message);
            }
            response.redirect('/')
        });
});
app.post('/:message_id/comment', (request, response) => {
    const { message_id } = request.params
    Message.findOne({_id:message_id})
        .then(thisMessage=>{
            thisMessage.comments.push(request.body)
            return thisMessage.save()
            .then(()=>response.redirect('/'))
        })
        .catch(err=>{
            console.log(err)
            for (var key in err.errors) {
                request.flash('post_comment', err.errors[key].message);
            }
            response.redirect('/')
        });
}); 
