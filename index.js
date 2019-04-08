


var takeANumber = function(theLine) {
     var num = 0;
     num++;
     return (`Welcome, You are number ${num}.`);
};

const line = []

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))

console.log(line) // => [1,2,3]

// takeANumber => Welcome you are number 1
// takeANumber => Welcome you are number 2
// takeANumber => Welcome you are number 3

// nowServing => Currently serving 1
// nowServing => Currently serving 2
// nowServing => Currently serving 3


// takeANumber => Welcome you are number 4


var nowServing = function(theLine) {
  if (theLine.length === 0) {
    return (`There is nobody waiting to be served!`);
  }
  
  var person = theLine.shift();
  return (`Currently serving ` + person + `.`);
};

var currentLine = function(theLine) {
  if(theLine.length === 0) {
    return ("The line is currently empty.");
  }
  var whoIsInLine = [];
  for(var i = 0; i < theLine.length; i++) {
    whoIsInLine.push((i+1) + ". " + theLine[i]);
  }
  return ("The line is currently: " + whoIsInLine.join(", "));
};