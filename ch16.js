function average() {  
  
  let cnt = 0, sum = 0;
  let avr = 0;
  
  function newF(...args){
    if(typeof args[0] === 'number'){
        for(let i=0; i<args.length; i++){
          cnt++;
          sum += args[i];
        };
        avr = sum/cnt;
        return avr;
    }
    else {
      	return avr;
    }
  }
  return newF;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8
