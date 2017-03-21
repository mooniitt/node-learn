const http = require('http')

const server = http.createServer((req,res)=>{
	let body = ''
	req.setEncoding('utf-8')

	req.on('data',(chunk)=>{
		body += chunk
	})

	req.on('end',()=>{
		try{
			const data = JSON.parse(body)

			res.write('typeof data')
			res.end()
		}catch(e){
			res.statusCode = 400
			return res.end(`error:${e.message}`)
		}
	})
})

server.listen(1337)


// for(let i =0;i<4;i++){
// 	console.log(i)
// }
// console.log(i)