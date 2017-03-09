'use strict';

// Function declaration
function myFunc(firstParam, secondParam, thirdParam){
  var result = [firstParam, secondParam, 88];
  var num = 1;
  num = num * 88;
}

myFunc();

// Function expression
var secondFunc = function () {
  console.log('foobar');
};

(function(){
  console.log('Some text');
})();
