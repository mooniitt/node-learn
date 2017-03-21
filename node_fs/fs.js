var fs = require('fs')
fs.readdir("../",function(err,files){
	if(err)throw err 
})

fs.writeFile('./data.js','hi',(err)=>{
	if(err)throw err
	// fs.unlink('../data.js',(err)=>{
	// 	console.log(`remove data.js`)
	// })
})
fs.access('data.js',fs.constants.R_OK | fs.constants.W_OK,(err)=>{
	if(err)throw err
	console.log("file can read|write ")
})

fs.readFile('./data.js','utf-8',(err,data)=>{
	console.log(data)
})


// fs.watchFile("./data.js",{interval:1000},(curr,prev) =>{
// 	console.log(`this current mtime is: ${curr.mtime}`)
// 	console.log(`this previous mtime is: ${prev.mtime}`)
// })


