// SETUP
// -----------------------------------------------------------------------------

// packages
var axios=require('axios');

// MODULE
// -----------------------------------------------------------------------------

// export
module.exports={

  // ---------------------------------------------------------------------------

  // config
  host: 'http://127.0.0.1:9200',

  // data
  url: null,
  data: {},

  // query
  timeout: 9999,
  method: 'GET',
  path: '',
  dsl: {},

  // ---------------------------------------------------------------------------

  // address
  address: async function(path='/'){

    // path
    this.path=path;

    // url
    if(this.path.indexOf('http://')===-1 && this.path.indexOf('https://')===-1)
      this.url=this.host + this.path;
    else
      this.url=this.path;

    // return
    return this.url;
  },

  // ---------------------------------------------------------------------------

  // execute
  execute: async function(method='GET', path='/', dsl={}){

    // config
    this.method=method;

    // address
    this.url=await this.address(path);

    // dsl
    this.dsl=dsl;

    // action
    this.data=await axios({
      timeout: this.timeout,
      method: this.method,
      url: this.url,
      data: this.dsl
    }).then(function(response){
      return response.data;
    })
    .catch(function(error){
      if(error.response)
        return error.response.data;
      else{
        console.log(error);
        return error;
      }
    });

    // return
    return this.data;
  },

  // scroll
  scroll: async function(path='/', dsl={}){

    // development
    console.log('development...');

    // return
    return {};
  },

  // ---------------------------------------------------------------------------

  // get
  get: async function(path='/', dsl={}){

    // execute
    this.data=await this.execute('GET', path, dsl);

    // return
    return this.data;
  },

  // put
  put: async function(path='/', dsl={}){

    // execute
    this.data=await this.execute('PUT', path, dsl);

    // return
    return this.data;
  },

  // post
  post: async function(path='/', dsl={}){

    // execute
    this.data=await this.execute('POST', path, dsl);

    // return
    return this.data;
  },

  // delete
  delete: async function(path='/'){

    // execute
    this.data=await this.execute('DELETE', path);

    // return
    return this.data;
  }

  // ---------------------------------------------------------------------------

}
