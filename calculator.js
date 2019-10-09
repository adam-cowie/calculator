// arr var to store entries
// var total to store answers
// var temp and set to empty '.'

// make button to run function
// run if function for value isNan or equal to .'.
// temp += val 
// get html element answer/input box and make #answer extract from the temp string from 0 - 10


// else if AC to clear everything
// else if CE to clear last entry only

// else if function for multiplying
// add current number to entries
// add multiplication symbol to entries
// clear temp

// else if function for dividing
// add current number to entries
// add division symbol to entries
// clear temp

// else if equals sign
// push the value in temp into entries
// create var nt and store amount of entries starting at 0
// loop through entries 
// create var nextNum (the next item in entries)
// var symbol = entries[i]
// create if function, if symbol is +, function nt += nextNum
// create else if function, if symbol is -, function nt -= nextNum
// create else if function, if symbol is *, function nt *= nextNum
// create else if function, if symbol is /, function nt /= nextNum

 
// show negative answers
// Swap the '-' symbol so text input handles it correctly
// if nt is less than 0, Math.abs(nt) + '-';

// answer = value of nt
// clear entries, clear temp
// else statement, add temp and val to entries and clear.

var entries = [];
var total = 0;

var temp = '';
$("button").on('click', function() {
 	var val = $(this).text();

  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#answer").val(temp.substring(0,10));

  } else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')

  } else if (val === 'CE') {
    temp = '';
    $("#answer").val('')

  } else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    temp = '';

  } else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';

  } else if (val === '=') {
  	entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
      i++;
    }

    if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';

  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});