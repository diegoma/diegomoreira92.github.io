var arq = require('fs');

arq.readFile('index.html', function(err, data){
    if (err) throw err;
    console.log(data.toString());       
});