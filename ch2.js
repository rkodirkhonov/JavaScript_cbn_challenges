function createFunctionPrinter(input) {
  function sayHello(){
   console.log(input);
  }
  return sayHello;
}
// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');
