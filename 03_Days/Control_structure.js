

// Activites 4: Condition (Tarnary) Operator

let tar = 357;
let val = ( tar % 2 == 0) ? 'Even Number' : 'Odd Number';
console.log(val);           //Odd Number

// Activites 5: Combining Condition

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear(2000)); // true
  console.log(isLeapYear(2004)); // true
  console.log(isLeapYear(1900)); // false
  console.log(isLeapYear(2003)); // false