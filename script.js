const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 3000
// let wrongpass=false
let password

app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + '\\index.html')

})
app.post("/", function (req, res) {
    password = req.body.pass
    console.log(password)
    if (password === "atri") {
        
        res.sendFile(__dirname + '\\userpage.html')
        // wrongpass=false
    }
    else {
        // alert("You entered a wrong password")
        // document.getElementById('wp').innerHTML="wrong Password"
        res.sendFile(__dirname + '\\index2.html')
        // res.sendFile(__dirname + '\\script2.js')
        // wrongpass = true
    }

})
   
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});