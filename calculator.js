
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
// if nt is less than 0, Math.abs(nt) + '-
 
// answer = value of nt

// clear entries, clear temp

// else statement, add temp and val to entries and clear.


    var total = ''
    var entries = []

    listen()
    
    function listen () {
      document.addEventListener('click', getButtonValue)
    }
    
    function getButtonValue () {
      let button = event.target.value
      if (!isNaN(button) || button === '.') {
        number(button)
      } else if (button === 'AC') {
        allClear()
      } else if (button === 'CE') {
        clear()
      } else if (button === '=') {
        calculate()
      } else {
        storeNumber(button)
      }
    }
    
    function number (button) {
      if (button === '.' && total.includes('.')) {
        return
      } else if (total.charAt(0) === '0' && total.length === 1 && button === '0') {
        return
      } else {
        if (isPreviousResult === true){
          numString = ''
          isPreviousResult = false
        }
        total += button
        display.value = total
      }
    }
    
    function allClear () {
      total = ''
      entries = []
      display.value = '0'
    }
    
    function clear () {
      total = ''
      display.value = '0'
    }
    
    function storeNumber (button) {
      if (total === '' && entries.length === 0) {
        return
      } else if (total === '') {
        entries.length = entries.length - 1
        entries.push(button)
      } else {
        entries.push(total)
        entries.push(button)
        total = ''
      }
    }
    
    function calculate () {
      entries.push(total)
      let currentNumber = Number(entries[0])
      for (var i = 0; i < entries.length; i++) {
        let nextNumber = Number(entries[i + 1])
        let symbol = entries[i]
        if (symbol === '+') {
          currentNumber += nextNumber
        } else if (symbol === '-') {
          currentNumber -= nextNumber
        } else if (symbol === '*') {
          currentNumber *= nextNumber
        } else if (symbol === '/') {
          currentNumber /= nextNumber
        }
      }
      if (currentNumber < 0) {
        currentNumber = Math.abs(currentNumber) + '-'
      }
    
      display.value = currentNumber
      total = JSON.stringify(currentNumber)
      isPreviousResult = true
      entries = []
    }