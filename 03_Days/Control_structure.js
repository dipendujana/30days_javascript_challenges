// Day 3: Control Structures

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function checkNumner(num){
      if (num>0) {
          console.log(`${num} is positive number`);
      } else if(num<0) {
          console.log(`${num} is Negative number`);
      }
        else {
          console.log(`${num} is zero`);
      }
  }
// checkNumner(10);
// checkNumner(-1);
// checkNumner(0);

 // Task 2: Write a program to check if a person is eligible to vote (age >- 18) and log the result to the console. 
  const eligibleVoter = (num) => {
  if (num >= 18) {
    console.log(`${num} You can vote`);
  } else {
    console.log(`${num} You can't vote`);
  }
}
eligibleVoter(17) //17 You can't vote

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

const largestNumber = (a,b,c) =>{
  if (a > b && a > c) {
    console.log(`${a} is largest ${a},${b},${c}`);
  }else {
    if (b > c) {
    console.log(`${b} is largest ${a},${b},${c}`);
  }
  else {
    console.log(`${c} is largest ${a},${b},${c}`);
    }
  }
}
largestNumber(11, 19, 9);  //19 is largest 11,19,9

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const weekDays = (value) =>{
  switch (value) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Enter Between 1-7");
      break;
  }
}
weekDays(7)

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const assignGrade = (score) => {
  let grade;
  switch (true) {
    case score >= 80 && score <= 100:
      grade = "A";
      break;

    case score >= 70 && score <= 79:
      grade = "B";
      break;

    case score >= 60 && score <= 69:
      grade = "C";
      break;

    case score >= 50 && score <= 59:
      grade = "D";
      break;

    case score >= 0 && score <= 49:
      grade = "F";
      break;

    default:
      break;
  }
  console.log("Your Grade is : ", grade);
};
assignGrade(90); // Your Grade is :  A

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let tar = 357;
let val = ( tar % 2 == 0) ? 'Even Number' : 'Odd Number';
console.log(val);           //Odd Number

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(`2000 is a leap year: ${isLeapYear(2000)}`); // true
  console.log(`1900 is a leap year: ${isLeapYear(1900)}`); // false
