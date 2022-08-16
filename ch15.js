function roulette(num) {
let cnt = 0;
  function newFunc(){
    if((cnt++) < num-1)
      return "spin";
    else{
      if((cnt++) == num)
        return "win";
      else
        return "pick a number to play again";
    }
  }
  return newFunc;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'
