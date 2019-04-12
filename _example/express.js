// package
var express=require('express');
var es=require('es.io');

// elasticsearch
es.host='http://127.0.0.1:9200';

// express
const app=express();

// example
app.get('/', async (req, res)=>{

  // data
  es.result=await es.execute('GET', '/_stats', {}).then((result)=>{
    return result;
  });

  // response
  res.json(es.result);

});

// app
app.listen(3000, ()=>console.log('es.io - Express'));
