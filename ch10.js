function defineFirstArg(func, arg) {
    function nFunc(input){
      return func(arg, input);
    };
      return nFunc;
    }
    
    // /*** Uncomment these to check your work! ***/
    // const subtract = function(big, small) { return big - small; };
    // const subFrom20 = defineFirstArg(subtract, 20);
    // console.log(subFrom20(5)); // => should log 15