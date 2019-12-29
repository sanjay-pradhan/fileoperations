const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()

app.use(fileUpload())
app.post('/uploadFile',function(req,res){
    if(!req.files || Object.keys(req.files).length ===0){
        return res.status(400).send('No Files were uploaded');
    }
    console.log(req.files);
    const file = req.files.filedata;
    file.mv("./upload/"+file.name, function(err,result){
        if(err){
        throw err;
        }
        res.send({
            success: true,
            message:'uploaded successfully'
        })
    });
   
});
app.listen(8000,function(){
    console.log('Express server listining on port 8000')
})

//call uploadFile from postman