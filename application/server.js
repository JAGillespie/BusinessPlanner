const express = require('express'); 
const path = require('path');
const app = express();

//Getting our post routes
const posts = require('./server/routes/posts');

// connects to use the dist dir
app.use(express.static(path.join(__dirname, 'dist')));

//this is middleware used to intercept req and redirect
app.use('/posts', posts);

//catch all route req and redirect to index
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html')) ;
});



app.listen(4600, (req, res)=>{
    console.log('running');
});