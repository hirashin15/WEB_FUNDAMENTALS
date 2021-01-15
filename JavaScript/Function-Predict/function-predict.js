// Predict 1
// var | val
// word| greeting() --> return "Hello"
// Output: "Hello"
function greeting() {
  return "Hello";
  console.log("World");
}
var word = greeting();
console.log(word);

// Predict 2
// var | val
// result1 | add(3,5) --> "Summing Numbers!","num1 is: 3", "num2 is: 5" 
//           var | val
//           sum | 3 + 5 = 8 return 8
// result2 | add(4,7) --> "Summing Number!", "num1 is: 4", "num2 is: 7"
//           var | val
//           sum | 4 + 7 = 11 return 11
// Output: "Summing Numbers!","num1 is: 3", "num2 is: 5", "Summing Number!", "num1 is: 4", "num2 is: 7", 8, 11
function add(num1, num2) {
  console.log("Summing Numbers!");
  console.log("num1 is: " + num1);
  console.log("num2 is: " + num2);
  var sum = num1 + num2;
  return sum;
}
var result1 = add(3, 5);
var result2 = add(4, 7);
console.log(result1);
console.log(result2);

// Predict 3
// var | val
// i   | 0 -> 1 -> 2. . .
// if i num = 6; Output: 0,1,2,3,4,"High Five!", 
// But function is not called, so output is nothing.
function highFive(num) {
  for (var i = 0; i < num; i++) {
    if (i == 5) {
      console.log("High Five!");
    }
    else {
      console.log(i);
    }
  }
}