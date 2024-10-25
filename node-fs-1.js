// file system

// If you want to manipulate a files in server or in our local machine  we can use file system


/***
 * 
 * FS module
 * 
 * 
 * ****/ 

const fs=require('fs');





/***
 * 
 * fs.readFileSync
 * 
 * 
 * ****/ 

// synchronous way 
// const data = fs.readFileSync('./ew-file.txt');
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


fs.appendFileSync('./ew-file.txt'," class is going onnnn")

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

// fs.mkdir('my-directory',(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log('folder createed  successfully');
// })


const path = require('path');
const pathName ='F:\Ajay\NodeJS_Scaler\sampletext.txt';
// F:\Ajay\NodeJS_Scaler\node-fs-1.js
const dirName=path.dirname(pathName)
// console.log('dirname', dirName);


const extensionName = path.extname(pathName)
console.log('extensionName', extensionName);