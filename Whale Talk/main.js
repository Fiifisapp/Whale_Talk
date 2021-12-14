let input = "a whale of a deal!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  //console.log("input Index: " + input[inputIndex])
  for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
    //console.log("vowel Index: " + vowelIndex)
    if (input[inputIndex] === vowels[vowelIndex]){
      if (input[inputIndex] === "e"){
        resultArray.push("ee")
      }
      else if (input[inputIndex] === "u"){
        resultArray.push("uu");
      }
      else{
        resultArray.push(input[inputIndex]);
      }
    }
  }
}
console.log(resultArray.join("").toUpperCase())