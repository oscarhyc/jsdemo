const express = require('express');
const router = express.Router();
router.get ('',(req,res) =>{
    const locals ={
        title : "My page",
        description: " My main page"
    }
    res.render('index', locals);
    
})


router.get ('/about',(req,res) =>{
    const locals ={
        title : "My about page",
        description: " My about page"
    }
    res.render('about',locals);
})
module.exports = router;