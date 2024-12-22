// file system

// If you want to manipulate a files in server or in our local machine  we can use file system

/***
 *
 * FS module
 *
 *
 * ****/

const fs = require("fs");
const http = require("http");

/***
 *
 * fs.readFileSync
 *
 *
 * ****/

// synchronous way
// const data = fs.readFileSync("./ew-file.txt");
// console.log(data.toString());
// console.log('This is the data in other file '+data);

/*******/

// -----------------------------------------------------------

/***
 *
 * fs.readFil ===>>>>> Async way
 *
 *
 * ****/

// Asynchronous way
// fs.readFile('./ew-file.txt',(err,data)=>{
//     console.log('data '+data);

// })
// fs.readFile("./ew-file.txt", (err, data) => {
//   console.log("data", data.toString());
// });

// const content = " Iam Ajay";
// fs.writeFile("./ew-file.txt", content, "utf-8", (err) => {
//   if (err) {
//     console.log("errrr", err);
//   }
//   console.log("file modifieddd");
// });
// const content = "Hello world";

/***
 *
 * fs.writeFile ===>>>>> Async way
 *
 *
 * ****/

// fs.writeFile('./ew-file.txt',content,'utf-8',(err)=>{
//     if(err){
//         console.log(err);

//     }
//     console.log("file modified");

// })

// IN synchronous your execution would be stopped until the operation is completed.
// In Asynchronous if move forward and a call back would be called once the operation is called

/***
 *
 * fs.appedfileSync
 *
 *
 * ****/

// fs.appendFileSync("./ew-file.txt", " class is going onnnn");

/***
 *
 * fs.rename
 *
 *
 * ****/

// fs.rename('ew-file.txt','sampletext.txt',(err)=>{
//     if(err){
//         console.log(err);

//     }
//     console.log('file renamed successfully');
// })

/***
 *
 * fs.mkdir =>> to create folder
 *
 *
 * ****/

// fs.mkdir("my-folder",(err) => {
//     if(err){
//         console.log('err');
//     }
//     console.log('dir created')

// });

// PATH MODULE------------------

// const path = require("path");
// const pathName = "F:AjayNodeJS_Scalersampletext.txt";
// F:\Ajay\NodeJS_Scaler\node-fs-1.js
// sampletext.txt;
// F:\Ajay\NodeJS_Scaler\sampletext.txt
// const dirName = path.dirname(pathName);
// console.log("dirname", dirName);

// TO get the extension of a file

// const extensionName = path.extname(pathName);
// console.log("extensionName", extensionName);¿

// How to copy file from once place to another.How
// 1.) we need source and destination path

// const sourcePath = "F:/Ajay/NodeJS_Scaler/sampletext.txt";
// const destinationPath = "F:/Ajay/NodeJS_Scaler/my-directory";
// F:\Ajay\NodeJS_Scaler\my-directory
// const basename = path.basename(sourcePath);
// const destination = path.join(destinationPath, basename);

// fs.copyFileSync(sourcePath, destination);
// fs.unlinkSync("sampletext.txt");
// console.log("====================================");
// console.log("destination", destination);
// console.log("====================================");

// creating a server using HTTP module
// =================================

const port = 3000;
const host = "localhost";
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain");
  res.write("Helllooo");
  res.end();
});

server.listen(port, host, () => {
  console.log("listenninggggggggggg");
});
