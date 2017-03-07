'use strict';

var answer = prompt('Are you ready to rumble?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
  // If the user answers yes, do the following.
  alert('The user said they are indeed ready to rumble.');
} else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
  /*
    If the user is not ready to rumble, do the following.
  */
  alert('The user is unfortunately not ready to rumble.');
} else {
  // If the user can't read instructions properly, admonish them!
  alert('You didn\'t put in a proper answer!');
}
