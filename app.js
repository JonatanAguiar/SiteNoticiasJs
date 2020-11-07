var app = require("./src/config/server");

var rotaHome = require('./src/routes/home')(app);

var rotaNoticia = require('./src/routes/noticias')(app);

var rotaFormInclusaoNoticia = require('./src/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log("Subiu server");
});