const express = require("express");
const app = express();
app.get('/cats', (request, response) => {
   response.render("index");
});


app.get("/michael", (req, res) => {
    var michaelArray = [
        {name: "Michael", favoriteFood: "salmon", age: "2", likes: ["toys", "naps"]}, 
    ];
    res.render('michael', {cat: michaelArray});
})

app.get("/steven", (req, res) => {
    var stevenArray = [
        {name: "Steven", favoriteFood: "tuna", age: "2"}, 
    ];
    res.render('steven', {cat: stevenArray});
})

app.get("/form", (req, res) => {
    res.render("form")
});


app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
