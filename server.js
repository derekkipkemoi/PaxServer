const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userDetailsRoute = require('./routes/User')
mongoose.set('strictQuery', false)
const uri = 'mongodb+srv://cynthia90:30338359@cluster1.jipxy0x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'
const port = 5000

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userDetailsRoute)

const start = async() => {
    try{
        await mongoose.connect(uri)
    app.listen(port, ()=> {
        console.log("App is running at port " + port)
    })
    }catch(e){
        console.log(e.message)
    }
    
}
start()