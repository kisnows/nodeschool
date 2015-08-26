  function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function(preValue,curValue,index,arr){
      // console.log(preValue,curValue,index,arr);
      if(preValue[curValue]>=1){
        preValue[curValue] +=1;
      }else{
        preValue[curValue] = 1;
      }
      return preValue;
    },{})
  }

  module.exports = countWords
  
//   Here's the official solution in case you want to compare notes:

// ───────────────────────────────────────
// ───────────────────────────────────────

//     function countWords(arr) {
//       return arr.reduce(function(countMap, word) {
//         countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//         return countMap
//       }, {}) // second argument to reduce initialises countMap to {}
//     }

//     module.exports = countWords

// ───────────────────────────────────────
// ───────────────────────────────────────