//#region ----------------- validate input is a number -----------------

// ** DO NOT COMMENT **
function isNumber(message = 'a') {
    var flag = true;
    do {
        var input = Number(window.prompt('Enter ' + message + ' number:'));
        if (input == input) {
            flag = false;
        }
    } while (flag);

    return input;
}

//#endregion


//#region 1- Write a program that allow to user enter number then print it

// var input = window.prompt('Enter Your Name');
// console.log(input);

//#endregion

//#region 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var input = isNumber();

// if(input % 3 == 0 && input % 4 == 0){
//     console.log('yes');
// }else {
//     console.log('no');
// }

// // another solution
// if(input % 12 == 0){
//     console.log('yes');
// }else {
//     console.log('no');
// }

//#endregion

//#region 3- Write a program that allows the user to insert 2 integers then print the max

// var firstInput = isNumber('the first');
// var secondInput = isNumber('the second');

// if(firstInput > secondInput) {
//     console.log(firstInput + ' is greater');
// }else if(secondInput > firstInput) {
//     console.log(secondInput + ' is greater');
// }else {
//     console.log(firstInput + ' equals ' + secondInput);
// }

//#endregion 

//#region 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var input = isNumber();

// if(input > 0){
//     console.log('positive');
// }else if(input < 0){
//     console.log('negative');
// }else{
//     console.log('Zero is neither positive nor negative');
// }

//#endregion

//#region 5- Write a program that take 3 integers from user then print the max element and the min element.

// var firstInput = isNumber('the first');
// var secondInput = isNumber('the second');
// var thirdInput = isNumber('the third');

// if (firstInput == secondInput == thirdInput) {
//     console.log('all numbers are equal');
// }

// if (firstInput <= secondInput && firstInput <= thirdInput) {
//     console.log(firstInput + ' is the min');
// } else if (secondInput <= firstInput && secondInput <= thirdInput) {
//     console.log(secondInput + ' is the min');
// } else if (thirdInput <= firstInput && thirdInput <= secondInput) {
//     console.log(thirdInput + ' is the min');
// }

// if (firstInput >= secondInput && firstInput >= thirdInput) {
//     console.log(firstInput + ' is the max');
// } else if (secondInput >= firstInput && secondInput >= thirdInput) {
//     console.log(secondInput + ' is the max');
// } else if (thirdInput >= firstInput && thirdInput >= secondInput) {
//     console.log(thirdInput + ' is the max');
// }

//#endregion

//#region 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var input = isNumber();

// if (input % 2 == 0 && input != 0) {
//     console.log('even');
// } else if (input % 2 == 1) {
//     console.log('odd');
// } else {
//     console.log('Zero is neither even nor odd');
// }

//#endregion

//#region 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var input = window.prompt('enter a character').toLowerCase();
// if (input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u') {
//     console.log(input + ' is a vowel');
// }else {
//     console.log(input + ' is a constant');
// }

//#endregion

//#region 9- Writeaprogramthat allows user to insert integer then print all numbers between 1 to that number

// var input = isNumber();

// if (input >= 1) {
//     for (var i = 1; i <= input; i++) {
//         console.log(i);
//     }
// }

// if (input < 1) {
//     for (var i = 1; i >= input; i--) {
//         console.log(i);
//     }
// }

//#endregion

//#region 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

// var input = isNumber();

// for (var i = 1; i <= 12; i++) {
//     console.log(input + ' * ' + i + ' = '+ (input * i));
// }

//#endregion

//#region 11- Write a program that allows the user to insert number then print all even numbers between 1 to this number

// var input = isNumber();

// if (input == 0) {
//     console.log('Zero is neither even or odd');
// } else if (input > 1) {
//     for (var i = 1; i <= input; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// } else if (input < 1) {
//     for (var i = -1; i >= input; i--) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }

//#endregion

//#region 12- Write a program that takes two integers then prints the power

// var base = isNumber('base');
// var power = isNumber('power "positive"');

// var result = 1;
// if (power == 0) {
//     console.log(1);
// } else if (power > 0) {
//     for (var i = 0; i < power; i++) {
//         result *= base;
//     }
// } else if (power < 0) {
//     for (var i = 0; i > power; i--) {
//         result *= base;
//     }
//     result = 1 / result;
// }
// console.log(result);

//#endregion

//#region 12- Write a program to enter marks of five subjects and calculate total, average and percentage

// var sum = 0;
// for (var i = 0; i < 5; i++) {
//     var input = isNumber();
//     sum += input;
// }

// console.log('Total marks = ' + sum);
// console.log('Average marks = ' + sum / 5);
// console.log('Percentage = ' + sum / 5);

//#endregion

//#region 13- Write a program to input month number and print number of days in that month

// do {
//     var input = isNumber('"between 1 and 12" month');
// } while (input < 1 || input > 12);

// if (input == 2) {
//     console.log('Days in month 28');
// } else if (input == 4 || input == 6 || input == 9 || input == 11) {
//     console.log('Days in month 30');
// } else {
//     console.log('Days in month 31');
// }

//#endregion

//#region 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// for (var i = 0; i < 5; i++) {
//     var input = isNumber();
//     switch (Math.floor(input / 10)) {

//         case 10:
//         case 9:
//             console.log(input + '%: Grad A');
//             break;
//         case 8:
//             console.log(input + '%: Grad B');
//             break;
//         case 7:
//             console.log(input + '%: Grad C');
//             break;
//         case 6:
//             console.log(input + '%: Grad D');
//             break;
//         case 5:
//         case 4:
//             console.log(input + '%: Grad E');
//             break;
//         case 3:
//         case 2:
//         case 1:
//         case 0:
//             console.log(input + '%: Grad F');
//             break;
//         case NaN:
//             console.log('Invalid input');
//             break;
//         default:
//             console.log('invalid input');
//             break;
//     }
// }

//#endregion

// ----------------- Switch -----------------
//#region 15- Write a program to print total number of days in month

// do {
//     var input = isNumber('"between 1 and 12" month');
// } while (input < 1 || input > 12);

// switch (input) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('Days in month 31');
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('Days in month 30');
//         break;
//     case 2:
//         console.log('Days in month 28');
//         break;
// }

//#endregion

//#region 16- Write a program to check whether an alphabet is vowel or consonant

// var input = window.prompt('enter a character').toLowerCase();

// switch (input) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log(input + ' is a vowel');
//         break;
//     default:
//         console.log(input + ' is a constant');
//         break;
// }

//#endregion

//#region 17- Write a program to find maximum between two numbers

// var firstInput = isNumber();
// var secondInput = isNumber();

// switch (firstInput >= secondInput) {
//     case true:
//         console.log(firstInput + ' is max');
//         break;
//     case false:
//         console.log(secondInput + ' is max');
//         break;
// }

//#endregion

//#region 18- Write a program to check whether a number is even or odd

// var input = isNumber();

// switch (input % 2) {
//     case 0:
//         console.log(input + ' is even');
//         break;
//     case 1:
//         console.log(input + ' is odd');
//         break;
// }

//#endregion

//#region 19- Write a program to check whether a number is positive or negative or zero

// var input = isNumber();

// switch (input >= 0) {
//     case true:
//         switch (input == 0) {
//             case true:
//                 console.log('input is Zero');
//                 break;
//             case false:
//                 console.log('input is positive');
//                 break;
//         }
//         break;
//     case false:
//         console.log('input is negative');
//         break;
// }

//#endregion

//#region 20- Write a program to create Simple Calculator

// var firstNumber = isNumber();
// var secondNumber = isNumber();
// var operator = window.prompt('Enter operator');

// switch (operator) {
//     case '+':
//         console.log(Number(firstNumber) + Number(firstNumber));
//         break;
//     case '-':
//         console.log(firstNumber - secondNumber);
//         break;
//     case '*':
//         console.log(firstNumber * secondNumber);
//         break;
//     case '/':
//         console.log(firstNumber / secondNumber);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

//#endregion