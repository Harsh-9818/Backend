const express =  require('express');
const app = express()
const userModel = require('./usermodel')


app.use(express.json());
app.use(express.urlencoded({extended: true}))

// app.use((req, res, next) => {
//     console.log("Middleware Hit");
//     next()
// })

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/create', async (req,res) => {
    let createduser = await userModel.create({
        name: "Krishna",
        email: "Krishna@gmail.com",
        username: "Radhakrishna"
    })

    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "iamnotharsh"}, {name: "Harsh Tanwar"}, {new: true})
    res.send(updateduser);
})

app.get('/read', async (req,res) => {
    let users = await userModel.find({username: "Radhakrishna"})
    res.send(users)
})

app.get('/delete', async (req,res) => {
    let deleted = await userModel.findOneAndDelete({username: "Radhakrishna"})
    res.send(deleted)
})

app.listen(3000)