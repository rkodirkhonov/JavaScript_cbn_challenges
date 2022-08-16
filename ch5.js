function after(count, func) {
    let cnt=count;
      function pp(){
        if(cnt === 1)
          return func();
        else{
          cnt--;
          console.log("nothing is printed");
        }
      }
      return pp;
    }
    
    // /*** Uncomment these to check your work! ***/
    // const called = function() { console.log('hello') };
    // const afterCalled = after(3, called);
    // afterCalled(); // => nothing is printed
    // afterCalled(); // => nothing is printed
    // afterCalled(); // => 'hello' is printed