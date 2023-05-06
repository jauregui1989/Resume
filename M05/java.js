let person = prompt("Please enter number 0 to 10", "0");
var table = person;             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 0;                 // Set counter to 1
var msg = 'multiplication table';              // Message

if (operator === 'multiplication') {
  // Do multiplicatiom
  while (i < 11) {
    msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
