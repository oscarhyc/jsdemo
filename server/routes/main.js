const express = require('express');
const router = express.Router();
router.get ('',(req,res) =>{

    const locals = {
        title : " Main page",
        description : " This is the main page "
    }
    res.render('index', locals);
})


router.get ('/about',(req,res) =>{
    const locals = {
        title : " Main page",
        description : " This is the main page "
    }
})
module.exports = router;