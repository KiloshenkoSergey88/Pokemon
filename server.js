const http = require('http');

const fs = require("fs");
  
http.createServer(function(request, response){
      
    let Pokemon = request.url.substr(1);

    fs.readFile(Pokemon, function(error, data){
              
        if(error){
                  
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
            console.log(Pokemon);
            
        }
    });
}).listen(5000, '192.168.1.100', function(){
    console.log("Server started at 5000");
});