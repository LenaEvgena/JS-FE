'use strict';
// 1. Variables: Declare admin and name variables. Assign the value "John" to name. Copy the value from name to admin. Show the value of admin using alert (must output “John”).
{
  let admin, name;
  name = 'John';
  admin = name;
  // alert(admin);
}


// 2. Array: Complete the method which accepts such an array, and returns that single different number (length >= 3)
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
{
  let array = [17, 17, 3, 17, 17, 17, 17];

  function getSingleNum(arr) {
    return +arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).join('');
  }

  getSingleNum(array);
}


// 3. Array: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
{
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function createPhoneNumber(arr) {
    let strArr = arr.join('');
    return `(${strArr.substr(0, 3)}) ${strArr.substr(3, 3)}-${strArr.substr(6)}`;
  }

  createPhoneNumber(array);
}

// 4. Array: Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
// deepCount([1, 2, 3]);
//>>>>> 3
// deepCount(["x", "y", ["z"]]);
//>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
//>>>>> 7
{
  function deepCount(arr) {
    let count = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count += deepCount(arr[i]);
      }
    }
    return count;
  }

  deepCount([1, 2, [3, 4, [5]]]);
}


// 5. Array: The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars. Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line. Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Line.Tickets([25, 25, 50]) // => YES
// Line.Tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// Line.Tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
{
  let array = [25, 25, 50];
  let array1 = [25, 100];
  let array2 = [25, 25, 50, 50, 100];

  function giveChange(peopleArr) {
    let $25 = 0;
    let $50 = 0;
    let $100 = 0;

    for(let i = 0; i < peopleArr.length; i++) {
      if (peopleArr[i] === 25) {
        $25++;
      }
      if (peopleArr[i] === 50) {
        $50++;
        $25--;
      }
      if (peopleArr[i] === 100) {
        $100++;
        $50--;
        $25--;
      }
    }

    if ($25 < 0 || $50 < 0 || $100 < 0) {
      return 'NO';
    }

    return 'YES';
  }

  giveChange(array);
}


// 6. Write an if condition to check that age is NOT between 14 and 90 inclusively.
{
  let age;

  if (age < 14 || age > 90) {
    console.log('Age is NOT between 14 and 90 inclusively!');
  }
}


// 7. Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
{
  let i = 0;

  while (i < 3) {
    // alert( `number ${i}!` );
    i++;
  }
}


// 8. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
{
  let num;

  do {
    num = prompt( 'Enter a number greater than 100...', 0);
  }
  while (num <= 100 && num);
}


// 9. Write a function min(a,b) which returns the least of two numbers a and b:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
{

}


// 10. Rewrite the function using '?' and '||'.
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }
{

}
