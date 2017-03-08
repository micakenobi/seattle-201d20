'use strict';

// var userName = prompt('HEY! GIVE ME YOUR NAME!');
//
// if (userName) {
//   alert('Thanks for the name!');
// }
//
// var money = 0;
//
// if (money) {
//   console.log('Give it to me');
// } else {
//   console.log('You\'re poor. Have some quarters');
// }
//
// var someArr;
// if (!someArr) {
//   someArr = [];
//   someArr.push(5);
//   alert('I added something to the array');
// }

// for (var i = 0; i < 10; i++) {
//   var num = Math.random();
//   if (num < 0.25) {
//     console.log('You got it! ' + num);
//     break;
//   }
//   console.log('You got ' + num + '. Try again');
// }
//
// var answer;
// while (true) {
//   // do a thing;
//   if (thingHappens) {
//     break;
//   }
// }
//
// alert('This runs after the loop');

for (var i = 0; i < 100; i++) {
  if (i < 25) {
    continue; // start at the top of the loop, increment i by 1
  }
  console.log(i);
  if (i > 50) {
    break; // leave the loop entirely
  }
}
var possibleAnswers = ['potato', 'tugboat', 'foobar'];
var userInput = prompt('Gimme a word');
