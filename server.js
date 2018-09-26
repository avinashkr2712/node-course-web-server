const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000; //to configure Heroku Port
var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');

app.use((req, res, next) => {

   var now = new Date().toString();
   var log = `${now}: ${req.method} ${req.url}`;
   console.log(log);
   //fs.appendFile('server.log', log + '\n');
   next();

});

// app.use((req,res,next)=>{
//    res.render('maintenance.hbs');
// });


app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
})

app.get('/', (req, res)=>{
    res.render('home.hbs');
});

app.get('/about',(req,res)=>{
  res.render('about.hbs');
});

app.get('/project',(req,res)=>{
  res.render('project.hbs');
});

app.get('/bad', (req, res)=>{
    //res.send('<h1>hello express</h1>');
    res.send({
      errorMessage:'Unable to process request'
    })
});

app.listen(port,()=>{
  console.log(`server is up and running on ${port}`);
});
