/* configura'ões do servidor */

var app = require('./config/server');

/* parametrizar porta de escuta */

var server = app.listen(3000, function(){
	console.log('Servidor Online');
})

var io = require('socket.io').listen(server);

/* Criar a conexão por websocket */
io.on('connection', function(socket){
	console.log('usuário se conectou!');

	socket.on('disconnect', function(){
		console.log('usuário desconectou');
	});
});