// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    input = input.toLowerCase()
    let square = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I/J', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z'],
    ];

    let result = "";
    let arr = [];
    //nested loop, i for outer
    for (let i = 0; i < input.length; i++){
      if (input[i] === " "){
        result += input[i];
      }

      //nested loop, j & k for inner
      for (let j = 0; j < square.length; j++){
        for (let k = 0; k < square[j].length; k++){
          //capital letters ignored
          squareLC = square[j][k].toLowerCase(); 

          if (input[i] === squareLC){
 
            result+=(String(k + 1)+String(j + 1));
        
          }
          //translates both 'i' and 'j' to 42
          if ((input[i]=== "i" || input[i]=== "j") && (square[j][k] === "I/J")){
            result+=(String(k + 1) + String(j + 1));
          }
        }
      }   
    }
    //return false if the length of all numbers is odd
    if (!encode){
      
      let inputs = input.split(" ").join("");
      
      //excluding spaces are even. Otherwise, return false
      if (inputs.length % 2 !== 0){
        return false;
      }
      for (let i = 0; i < input.length; i += 2){
        if (input[i]===" "){
          arr.push(input[i])
          i += 1
          
        }
        arr.push(input[i] + input[i + 1]);
      
      }
      arr.find((element)=> {
        if(element === " "){
          result += element;
        }

        //output will still be a string
        for (let j = 0; j < square.length; j++){
          for (let k = 0; k < square[j].length; k++){
            if ((element === String(k + 1) + String(j + 1))){
              result += (square[j][k].toLowerCase());
            }
          }
        }
      });
      
    }
    return result.trim();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
