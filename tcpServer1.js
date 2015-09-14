ar net = require('net');

var tcpServer = net.createServer(function(socket){
                console.log('conection established...');
				
				socket.on('end', function(){
				       console.log('server disconnected..');
					   });
					   
				socket.on('close',function(){
				        console.log('closed event fired');
						});
					   
				socket.on('data', function(data){
				        console.log('data received from the tcp client');
					    	socket.write('Server Reply: ' + data);
						});
				
				});
				
tcpServer.listen(function(){
                            var port = tcpServer.address().port;
							console.log('server started listening on port: ' + port);});
