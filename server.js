
const express = require('express');
const app = express();


app.use(express.static(__dirname));

app.get('/',function(request,response){
	response.sendFile(__dirname + '/index.html');
})


const listener = app.listen(80, function() {
	console.log('Aplicação disponível na porta 5001' );
});
