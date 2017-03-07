'use strict';

var question1 = 'What is your name?';
var userName = prompt(question1);
console.log(question1 + ': ' + userName);
var response1 = 'Well hello there, ' + userName;
alert(response1);

var question2 = 'What is your favorite color?';
var color = prompt(question2);
console.log(question2 + ': ' + color);
var response2 = 'Hey, ' + userName + ' I also like ' + color;
alert(response2);

var question3 = 'Where are you from?';
var place = prompt(question3);
console.log(question3 + ': ' + place);
var response3 = 'Do people in ' + place + ' also like ' + color + ', ' + userName + '?';
alert(response3);

var question4 = 'Do you want to play a game?';
var answer = confirm(question4);
console.log(question4 + ': ' + answer);
if (answer === true) {
  var response4 = 'Awesome! When we get to it, we\'ll play a game';
} else {
  var response4 = 'Well then, you suck.';
}
alert(response4);
