import express from "express";


const app = express();
const PORT = 4000;



//Middleware
app.use(express.json())

//Routes
app.get('/',(req,res)=>{
    //.status(200).json({message:"First node app welcomes you all"})
    res.status(200).send('<span style="background-color:Yellow;font-size : 50px">Welcome to first node app</span>')
})




app.listen(PORT,()=>{    
    console.log('App is listening on port');
})