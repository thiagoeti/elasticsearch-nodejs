# ElasticSearch - NodeJS

[NPM - ElasticSearch IO](https://www.npmjs.com/package/es.io)

This library executes Query DSL (Domain Specific Language) based on JSON, of extremely simple format to comunicate with the ElasticSearch.
Builder to execute **"sync"** __(synchronous)__
It's developed to be used in any framework, [ExpressJS](http://158.69.206.147), [KoaJS](https://koajs.com), [Restify](http://restify.com), etc...
Also contain  a **Scroll**  function for the execute of paginate in queries.
Use [Axios](https://github.com/axios/axios) (dependence) for communication REST.

> This library support ALL methods GET, PUT, POST, DELETE ... :heart_eyes:

### Install

Install used NPM.

```sh
$ npm i es.io
```

For **BigData** execute Scroll.

```js
es.scroll('/index/_doc/_search', {})
```

> This is very good :sunglasses:

For custom execute.

```js
es.execute('GET' '/index/_doc/_search', {})
```

For _GET_ execute.

```js
es.get('/index/_doc/_search', {"size":9})
```

For _PUT_ execute.

```js
es.put('/index/_doc/:id', {"field":"value"})
```

For _POST_ execute.

```js
es.post('/index/_doc/:id', {"field":"value"})
```

For _DELETE_ execute.

```js
es.delete('/index/_doc/:id')
```

### Library example

Example of any use.

```js
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
```

### ExpressJS - Example

Example of use with [ExpressJS](http://158.69.206.147).

```js
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
```

### KoaJS - Example

Example of use with [KoaJS](https://koajs.com).

```js
// development
```

### Restify - Example

Example of use with [Restify](http://restify.com).

```js
// development
```
