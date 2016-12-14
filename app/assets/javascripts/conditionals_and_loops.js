

// RUBY CONDITIONALS
// if x > 50
//   puts "High number"
// elsif x < 25
//   puts "Low number"
// elsif x == 31
//   puts "My favorite number"
// else
//   puts "Medium number"
// end


// JAVASCRIPT CONDITIONALS:
// var x = 10;
// if (x > 50) {
//   console.log("High number");
// } else if (x < 25) {
//   console.log("Low number");
// } else if (x === 31) {
//   console.log("My favorite number");
// } else {
//   console.log("Medium number");
// }



// RUBY EQUALITY CHECK:
// 5 == 5  # true
// 5 == "5"  # false
// 5 != "5"  # true

// JAVASCRIPT EQUALITY CHECK:
// 5 == 5 // true
// 5 == "5" // true
// 5 === "5" // false
// 5 !== "5" // true
// 5 != "5" // false



// RUBY FALSEY:
// puts "WAT" if false
// puts "WAT" if nil

// JAVASCRIPT FALSEY
// if (false) { console.log("WAT"); }
// if (null) { console.log("WAT"); }
// if (undefined) { console.log("WAT"); }
// if (0) { console.log("WAT"); }
// if ("") { console.log("WAT"); }
// if (NaN) { console.log("WAT"); }



// RUBY RANDOM NUMBER
// rand(1..10)

// JAVASCRIPT RANDOM NUMBER
// Math.floor((Math.random() * 10) + 1);



// RUBY WHILE LOOPS
// i = 0
// text = ""
// while i < 10
//   text = text + " The number is " + i
//   i += 1
// end
// puts text

// JAVASCRIPT WHILE LOOPS
// var i = 0;
// var text = "";
// while (i < 10) {
//     text = text + " The number is " + i;
//     i++;
// }
// console.log(text);



// RUBY FOR LOOP
// for i in 0...10
//   puts i
// end

// JAVASCRIPT FOR LOOP
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// Logical equivalent of the above for loop:
// var i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }
//
// What the above for loop means in English:
// for(let's set an arbitrary variable called i to be set to 0;
// let's continue running the loop as long as i is less than 10;
// each time the loop runs, increase i by 1.)
// Essentially, this is a loop running 10 times, and in each pass through,
// i will be increased by 1. It starts at 0, and ends at 9.



// RUBY EACH THROUGH ARRAY
// words = ["apple", "banana", "carrot", "date", "escarole", "fig", "gourd", "hmm", "igloo", "jam", "kazoo", "lamp", "mouse"];
// words.each do |word|
//   puts word
// end

// JAVASCRIPT EACH THROUGH ARRAY
// var words = ["apple", "banana", "carrot", "date", "escarole", "fig", "gourd", "hmm", "igloo", "jam", "kazoo", "lamp", "mouse"];
// for (var i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }


// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("Blastoff!");


var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum / numbers.length);


//  fizz = 3
//  buzz = 5

// for (var i = 0; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

var userInput = parseInt(prompt("Pick a number"));
var randomNumber = 34;
var numGuesses = 1;
// console.log(userInput);
// console.log(randomNumber);
while (numGuesses < 3) {
  if (userInput === randomNumber) {
    alert("You win");
    break;
  } else if (userInput > randomNumber) {
    userInput = parseInt(prompt("Too high. guess again"));
    numGuesses ++;
  } else {
    userInput = parseInt(prompt("Too low. guess again"));
    numGuesses++;
  }
}
