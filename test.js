
const express = require ('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req,res)=> {
res.send('first one');
});

app.get('/hello', (req, res)=>{
res.send('hi hello ');
});

app.get('/users', (req, res)=>{
res.send('our users');
});

app.listen(PORT , HOST , () => {
console.log('successfully');
});