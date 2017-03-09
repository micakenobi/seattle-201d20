"use strict";
var userScore = 0;

var name= prompt("Hello, what's your name?");

function greeting () {
  alert("Good to meet you " + name + "!");
  console.log('name:' + name);
}
greeting();

confirm ("Let's play a guessing game, I have 7 questions for you, let's see if you can get a score of 7 out of 7!");

var question = ['Am I a vegetarian?','Do I like Indian food?', 'Is my favorite TV show Stranger Things?', 'Can I read minds?', 'Do I like long walks on the beach?'];

var answerYes = ['ROFLOL! Have you seen me?! No way. Omnivore.', 'YES! I love Indian food!', 'Yes, I love Stranger Things', 'ROFLOL! No, I cannot', 'ROFLOL! No, I like to drive though!'];

var answerNo = ['You are correct, I eat everything!', 'Wrong! I love Indian food!', 'What? I love the television show!', 'You are correct, I can\'t read minds', 'You are correct, I like to drive instead!'];

var varInc = [[0,1], [1,0], [1,0], [0,1], [0,1]];

for (var i = 0; i < question.length; i++) {
  var userResponse = '';
  var goodAnswers = ['yes', 'no', 'y', 'n'];
  while (!goodAnswers.includes(userResponse.toLowerCase())) {
    var userResponse = prompt(question[i]);
    if (userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'y'){
      alert(answerYes[i]);
      userScore += varInc[i][0]; // I'm going to add a number, either 0 or 1 to your score
      if (varInc[i][0] === 1) {
        break;
      }
    } else if (userResponse.toLowerCase() === 'no' || userResponse.toLowerCase() === 'n') {
      alert(answerNo[i]);
      userScore += varInc[i][1]; // I'm going to add a number, either 0 or 1 to your score
      if (varInc[i][1] === 1) {
        break;
      }
    } else {
      console.log('Oops, something went wrong');
    }
  }
  console.log('Score is: ' + userScore);
}

// var tries = 0;
for (var tries = 0; tries < 4; tries++) {
  var numberAnswer = prompt('How many kids do I have? (use a number)');
  var parsed = parseInt(numberAnswer);
  console.log('User name guess: ' + numberAnswer);
  if (parsed === 2){
    alert('You\'re right! I have one four-year-old daughter and one-year-old daughter!');
    userScore++; // counts up the right answer
    console.log('User Score:' + userScore);
    break;
  } else if (parsed > 2){
    alert('No, that\'s too many!!! Try again!');
  } else if (parsed < 2){
    alert('Nope, I have more kids than that! Try again!');
  } else {
    alert('Hey, I told you to use a damn number!');
  }
}

var kidNameArray = ['avery', 'zoe'];
var tries = 0;
while (tries < 6) {
  var nameGuess = prompt('Can you guess one of the names of my daughters? One starts with an \'A\' and one with a \'Z\'.');
  console.log('User name guess: ' + nameGuess);
  if (nameGuess.toLowerCase() === kidNameArray[0]){
    alert('Yes, my oldest 4-year-old is Avery! The other child is one-year-old Zoe!');
    userScore++;
    console.log('User Score: ' + userScore);
    break;
  } else if (nameGuess.toLowerCase() === kidNameArray[1]) {
    alert('Yes, my youngest daughter is Zoe! The other child is 4-year-old Avery!');
    userScore++;
    console.log('User Score: ' + userScore);
    break;
  } else if (nameGuess.toLowerCase() !== kidNameArray[0] || nameGuess.toLowerCase() !== kidNameArray[1]){
    alert('You\'re not even close!');
    console.log('User Score: ' + userScore);
    tries++;
  }
}

if (userScore === 7){
  alert('Great job! Perfect Score, 7 out of 7 correct!');
} else if (userScore < 7 && userScore > 4){
  alert('Not bad, but you missed a couple! Your score is ' + userScore + ' out of 7');
} else if (userScore <= 4){
  alert('Yikes, you don\'t know me very well! Your score is: ' + userScore + ' out of 7');
}
