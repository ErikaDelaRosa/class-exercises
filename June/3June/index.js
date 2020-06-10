const fs = require ("fs"); // has to do with all the files i have
const zlib = require ("zlib");
const path = require ("path");
//the square brackets means the first index.text will live in this variable, and then everything else.I create my path after slicing the argv
const [filePath = path.join(_dirname,"input.txt")] = process.argv.slice(2);
//we use pipe to slice the item.
/*const stream = fs
.createReadStream(filePath)
.pipe(zlib.createGzip())
.pipe(fr.createWriteStream(filePath+'.gz')); //then i want to write a new file

stream.on('close',() => console.log('Done'));
*/

//i want to give information to the user
const http = require("http");

const requestListener = function (req,res) {
    res.writeHead(200);
    res.end('Hey I am a server')
};
const server = http.createServer(requestListener);
server.listen(8080);


//fs = File System
//bracket apply to livestream
/*let writer = fs
.createWriteStream('newBigTest.txt',{flags:'wx+'})
.on('error',(er)=> {
    console.log(er);
})
.on('open',function(fileData){
    console.log('file is open');
    console.log(`file data : ${fileData}`);
});

writer.write('Hi this is new file done by Nodejs');
let newWriter = fs.createWriteStream('newText.txt', {flag:'w'});
newWriter.on('pipe', ()=> {
    console.log('cool something is piped in');
})

let reader = fs
.createReadStream('newBigTest.txt')
.pipe(newWriter);
*/