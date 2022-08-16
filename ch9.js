function cycleIterator(array) {
    let cnt = 0;
      return function(){
        if(cnt < array.length){
          return array[cnt++];
        }else{
          cnt = 0;
          return array[cnt];
        }
    };
    }
    
    // /*** Uncomment these to check your work! ***/
    // const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
    // const getDay = cycleIterator(threeDayWeekend);
    // console.log(getDay()); // => should log 'Fri'
    // console.log(getDay()); // => should log 'Sat'
    // console.log(getDay()); // => should log 'Sun'
    // console.log(getDay()); // => should log 'Fri'