const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


// Midleware
app.use(cors())
app.use(express.json())

const users = [
    {
        "uid":"101",
        "name":"Abdul Motin",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"102",
        "name":"Abdur Razzak",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"103",
        "name":"Abdul Hamid",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"104",
        "name":"Abdul Kader",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"105",
        "name":"Abdul Khalek",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"106",
        "name":"Abdul Hakim",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"107",
        "name":"Abdul Karim",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"108",
        "name":"Abdul Zabbar",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "uid":"109",
        "name":"Abdul Baset",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    }
]

app.get('/',(req, res) =>{
    res.send('second server is time to run');
});

app.get('/users', (req, res) =>{
    res.send(users)
})

app.post("/users", (req,res)=>{
    console.log(req);
})

app.listen(port, () =>{
    console.log(`our server is successfully run ${port}`);
})