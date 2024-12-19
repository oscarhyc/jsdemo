const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
router.get ('', async (req,res) =>{
    const locals ={
        title : "My page",
        description: " My main page"
    }

    try{
        const data = await Post.find();
        res.render('index', {locals,data});
    } catch (error){
        console.log(error);
    }
    
})


router.get ('/about',(req,res) =>{
    const locals ={
        title : "My about page",
        description: " My about page"
    }
    res.render('about',locals);
})
module.exports = router;



// function insertPostData() {
//     try {
//          Post.insertMany([
//             {
//                 title: "Nature is Beautiful",
//                 body: "Nature has stunning views."
//             }

//         ]);
//         console.log("Data inserted successfully.");
//     } catch (error) {
//         console.error("Error inserting data:", error);
//     }
// }
//insertPostData();

// Execute the function
//insertPostData();