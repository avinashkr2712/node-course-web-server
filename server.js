const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
    //res.send('<h1>hello express</h1>');
    res.send({
      name:'avinash',
      likes:['reading','travelling']
    })
});

app.get('/about',(req,res)=>{
  res.render('about.hbs');
});

app.get('/bad', (req, res)=>{
    //res.send('<h1>hello express</h1>');
    res.send({
      errorMessage:'Unable to process request'
    })
});

app.listen(3000,()=>{
  console.log('server is up and running on 3000');
});
