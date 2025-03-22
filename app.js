
const express = require('express');
const {connMongo}=require('./db');
const indexRouter = require('./routes/');
const anaRouter=require('./routes/analyze.js');
const URL=require('./models/url');
const path = require('path'); 
require('dotenv').config();
const app = express();


connMongo(process.env.Mongo).then(()=>console.log("mango connected"));
const cors = require('cors');
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.get('/',(req,res)=>{
//     res.send("welcome to express");
// })

app.get('/',(req,res)=>{
    return res.render("index");
})
app.get('/ana',(req,res)=>{
    return res.render("analyze");
})


app.use('/url', indexRouter);
app.use('/analy', anaRouter);
// app.use('/analy/:shortId', anaRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry= await URL.findOneAndUpdate({shortId},{
        $push:{
            visited:{
                visitTimestamp:Date.now(),
            },
        },
    });
    if (!entry) {
        return res.status(404).send("URL not found");
    }else    
        res.redirect(entry.ogUrl);

} );

// //app.use('/url/:shortId', indexRouter);
// app.use('/', function(req,res){
//     res.send("hello");
// });

app.listen(process.env.PORT,()=> console.log(`server strarted at port ${process.env.PORT}`));

// catch 404 and forward to error handler


// error handler

