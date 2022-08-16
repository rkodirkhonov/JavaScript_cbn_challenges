function rollCall(names) {
let cnt = 0;
  function printName(){
    if(cnt <names.length){
      console.log(names[cnt]);
      cnt++;
    }else{
      console.log("Everyone accounted for");
    }
  }
  return printName;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'