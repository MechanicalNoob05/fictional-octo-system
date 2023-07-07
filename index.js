require('dotenv').config()
const express = require('express')

const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=>{ console.log(error) })
db.once('open',()=>{ console.log('connected') })

app.use(express.json())

const commentRouter = require('./routes/comment')
app.use('/comment',commentRouter)

const port = 4000

app.listen(port,()=>{
	console.log('Server on',port);
	
})
