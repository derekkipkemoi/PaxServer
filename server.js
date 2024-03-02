const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userDetailsRoute = require('./routes/User')
mongoose.set('strictQuery', false)
const uri = 'mongodb+srv://kipkemoi:30338359@paxfull.gf8spvf.mongodb.net/?retryWrites=true&w=majority&appName=Paxfull'
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