function createSecretHolder(secret) {
let sec = secret;
  const obj = {
    getSecret(){
      return sec;
    },
    setSecret(newSec){
      sec = newSec;
    },
  };
  return obj;
}
