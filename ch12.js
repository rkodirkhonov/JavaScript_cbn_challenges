function censor() {

    let Obj = {};
    
    function newFunction(...args){
      if(args.length === 2){
        Obj[args[0]] = args[1];
      }
      else {
          for (let key in Obj) {
          args[0] = args[0].replace(key, Obj[key]);
        }
        return args[0];
      }
    };
    return newFunction;
  }
  
  /*** Uncomment these to check your work! ***/
  // const changeScene = censor();
  // changeScene('dogs', 'cats');
  // changeScene('quick', 'slow');
  // console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'