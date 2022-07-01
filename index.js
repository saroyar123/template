const express=require('express');
const app=express();
const user=require("./database/model");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render('home');
});

 app.post('/about',(req,res)=>{
  user.create(req.body);
  res.render('about',{data:req.body});
 })
app.listen(3000,()=>{
    console.log("server is runnig");
})