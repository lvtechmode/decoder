// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const abcs = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    let result = "";
    let unique = [];
    //returns false if the substitution alphabet is not 26 char
    if(!alphabet || alphabet.length !== 26){
      return false;
    }
    
    //works with any kind of key with unique characters
    for (let i = 0; i < alphabet.length; i++){
      unique.push(alphabet[i])
    }
    unique = unique.sort();

    for (let i = 0; i < unique.length; i++){
      if (unique[i] === unique[i + 1]){
        return false;
      }
    }

    //preserve spaces & coverts to lowercase
    for (let i = 0; i < input.length; i++){
      let inputChar = input[i].toLowerCase();
      if (inputChar === " ") {
        result += inputChar;
      }
      
      //encodes message by using the given substitution alphabet
      if (encode){
        for (let j = 0; j < abcs.length; j++){
          if (inputChar === abcs[j]){
            result += alphabet[j];
            
          }
      }
      }
      else {
        for (let k = 0; k < alphabet.length; k++){
          if(inputChar === alphabet[k]){
            result += abcs[k];
          }
        }
      }
    }
  
  return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
