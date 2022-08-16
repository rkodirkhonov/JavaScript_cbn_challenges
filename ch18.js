function makeHistory(limit) {
const max = limit;
let cnt = 0; //counter
let arr = [];
function getStr(str){  
  if(str === "undo"){
    if(!arr[cnt]){
      cnt--;
      return `${arr[cnt]} undone`;
    }
    else{
      return "nothing to undo";
    }
  }else{
		if(!!str){
			arr[cnt] = str;
			cnt++;
			return `${arr[cnt-1]} done`
}
}
}
  return getStr;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'
