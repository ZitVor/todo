const express = require('express')
const config = require('config')
const User = require('../server/models/User')
const { mongoose } = require('mongoose')
var bodyParser = require('body-parser');
const app = express() 

app.use('/api/list', require('./routes/list.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const PORT = config.get('port') || 5000

// app.use((req, res, next) => {
//     const allowedOrigins = ['http://localhost:3000'];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//          res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     console.log("ccccccccccccc");
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     return next();
//   });


async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    }
    catch (e) {
        console.log('Server Error',e.message)
        process.exit(1)
    }
}

start()
