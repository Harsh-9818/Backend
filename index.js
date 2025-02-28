const express =  require('express');
const app = express()

app.use((req, res, next) => {
    console.log("Middleware Hit");
    next()
})

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(3000) 