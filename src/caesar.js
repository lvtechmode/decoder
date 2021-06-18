// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {

    //gnore capital letters
    let inputStr = input.toLowerCase();
    let result = ""; 

    //return false if the shift amount is 0, >25, <25
    if (!shift || shift < -25 || shift > 25){
      return false;
    }

    for (let i = 0; i < inputStr.length; i++){
      let entered = inputStr[i];
      //leaves spaces and other symbols as is
      if (entered === " " || !(alphabet.includes(entered))) {
        result += entered;
      }

      for (let prop in alphabet){

        //handles letters at the end of the alphabet
        if (entered === alphabet[prop]){
          let shiftVal;
          (encode)?shiftVal = Number(prop) + Number(shift):
          shiftVal = Number(prop) - Number(shift);
         
          //allows negative shift to the left
          if (shiftVal > 25) shiftVal -= 26;
          if (shiftVal < 0) shiftVal += 26;
          result += alphabet[shiftVal];  
        }
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
