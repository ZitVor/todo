
const express = require('express')
const List = require('../models/List')
const router = express.Router()
const auth = require('../middleware/auth.middleware')

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/createlist', auth, async(req,res) =>{
    try{
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        console.log(req.body)   
    const name = req.body.name
    const owner = req.body.user.userId
    console.log(`hello ${name}`)
    console.log(owner)
    // const list = new List({
    //     name, owner
    //   })
  
    //   await list.save()
  
    const list = await List.create({name, owner})
    console.log(list)
    res.status(201).json({list})
    }
    catch(e){
        res.status(500).json({e})
    
    }
})

router.get('/getall',auth, async(req,res) =>{

    try{
        
    const owner = req.body.user.userId
        const lists = await List.find({owner})
        res.status(200).json(lists)
    }
    catch(e){
        console.log(e)
    }
})
// router.options('/createlist', async (req, res) => { 
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.send();
//   })
  
module.exports = router