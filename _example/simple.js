// package
var es=require('es.io');

// elasticsearch
es.host='http://127.0.0.1:9200';

// app
(async ()=>{

  // debug
  console.log('Start!');

  // data
  es.result=await es.execute('GET', '/_stats', {}).then((result)=>{
    return result;
  });

  // debug
  console.log(es.result);

  // debug
  console.log('Finish!');

})();
