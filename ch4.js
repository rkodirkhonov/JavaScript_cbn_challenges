function once(func) {
let cnt = 0;
  let res = 0;
  function add(input){
    if(cnt===0){
      res = func(input);
      cnt++;
      return func(input);
    }
    else 
      return res;
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6
