
const express = require('express');
const app = express();
require('@google-cloud/profiler').start();

app.use(express.static(__dirname));

app.get('/',function(request,response){
	response.sendFile(__dirname + '/index.html');
})

const PORT = process.env.PORT || 80;

const listener = app.listen(PORT, function() {
	console.log('Aplicação disponível na porta 5001' );
});
