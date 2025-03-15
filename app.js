const express = require('express')
const app = express();
const Path = require('path');
const userModel = require('./models/user.js')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(Path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render("read", {users})  //if upar wali line mai users ki jgha user 
    // hota to hame yaha users:user likhna padta (users:users = users (only))
})

app.post('/create',async (req, res) => {
    let {name, email, image} = req.body 
    let createdUser = await userModel.create({
        name,  //name: name (ese bhi likh skte hai)
        email,
        image
    });

    res.redirect("/read");
})

app.get('/delete/:id', async (req, res) =>{
    let deletedUsers = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})

app.get("/edit/:userid", async(req,res) => {
    let user = await userModel.findOne({_id: req.params.id})
    res.render("edit", {user})
})

app.listen(3000);