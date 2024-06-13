window.myLocalStorage = {
    getItem(key){
      let res = JSON.parse(window.localStorage.getItem(key));
      if(res){
        if(res.exp <= Date.now()){
          this.removeItem(key);
          return 'Has Expired'
        } else{
          return res.data;
        }
      } return null;
    },
    setItem(key, val, exp){
      let data ={
        data: val,
        exp: Date.now() + exp
      }
      window.localStorage.setItem(key, JSON.stringify(data))
    },
    removeItem(key){
          window.localStorage.removeItem(key)
    },
    clear(){
      window.localStorage.clear();
    }
  }
  
  // your code goes here....
  
  // set 'bar' on 'foo' that will expiry after 1000 milliseconds
  myLocalStorage.setItem('foo', 'bar', 1000);
  
  // after 2 seconds
  setTimeout(() => console.log(myLocalStorage.getItem('foo')), 5000)
  console.log(myLocalStorage.getItem('foo'));
  // null