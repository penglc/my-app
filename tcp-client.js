var net = require('net') ;
//const stringRandom = require('string-random');

var arguments = process.argv.splice(2);
var IP = arguments.toString();
if (IP == '') {
    console.log("Format: node tcp-client.js IP")
    process.exit();
}
var client = net.connect(8000, IP,function(){

    client.name = 'client';
    client.write(client.name + ' is up！\n');
    //client.write(client.name + ' is up！\n' + stringRandom(102) + '\n~~~~~~~~~~~\n');
    client.end(client.name + ' down！\n');
    client.on("data", function(data) {
        console.log(data.toString());
        process.exit();
    });
});
