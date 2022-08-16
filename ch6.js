function delay(func, wait, ...args){
    setTimeout(() => func(...args), wait);
  }
  function consoleMe(message){
    console.log(message);
  }
  //delay(consoleMe, 3000, "Hello Brother How are you doing?");