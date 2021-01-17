const fs = require('fs')
const path = require('path')

//create folder

// fs.mkdir(path.join(__dirname,'FSmkdir'),{},(err)=>{
//     if(err)throw err;  
//     console.log("created")
// }
// );


//create and write to file
fs.writeFile(path.join(__dirname,'/FSmkdir','test.txt'),`${path.parse(__filename).base} 
${__dirname}`,(err)=>{
    if(err)throw err;
console.log("file created");
fs.appendFile(path.join(__dirname,'/FSmkdir','test.txt'),
`\nThis should be next line if it is this proves success`,

(err)=>{
    if(err)
    throw err;
    console.log("append success");
})
}
)

//Read File
fs.readFile(path.join(__dirname,'FSmkdir','test.txt'),`utf8`,(err,data)=>{
    if(err)
    throw err;
    console.log(data);
})
