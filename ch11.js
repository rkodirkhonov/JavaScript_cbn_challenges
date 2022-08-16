function dateStamp(func) {
    function nef(input){
      let obj = {};
      obj.date = new Date();
      obj.output = func(input);
      return obj;
    };
      return nef;
    }
    
    // /*** Uncomment these to check your work! ***/
    // const stampedMultBy2 = dateStamp(n => n * 2);
    // console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
    // console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }