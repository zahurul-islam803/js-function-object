// function getMarks (a1, a2, a3){
//   var average = (a1 + a2 + a3) / 3;
//   console.log(average);
// }

//  getMarks(60,58,59);

// var myComputer ={
//   color: 'black',
//   ram: 8,
//   monitor: '24.5"',
//   processor: 'i5',
// }

// const entriesArray = Object.entries(myComputer);
// console.log(entriesArray);

// for(var propertyName in myComputer){
//   const value = myComputer[propertyName];
//   console.log(propertyName, value);

// }

// var propertyRam = 'ram';
// var propertyName = Object.keys(myComputer);
// var propertyValues = Object.values(myComputer);
// myComputer['ram'] = 120;
// myComputer[propertyRam] = 130;
// console.log(myComputer);
// console.log(propertyName);
// console.log(propertyValues);

// const color = 'yellow';

// switch(color){
//   case 'green':
//     console.log('green');
//     break;
//     case 'blue':
//       console.log('blue');
//       break;
//       case 'purple':
//         console.log('purple');
//         break;
//         case 'primary':
//           console.log('primary');
//           break;
//         case 'yellow':
//           console.log('yellow');
//           break;
//           default:
//             console.log('black');
// }

// task 1
// function foo(){
//   console.log('foo');
//   function bar(){
//     console.log('bar');
//   }
//   bar();
// }
// foo();

// task 3

// function make_avg(int1,int2, int3, int4, int5, int6){
//   var sizeOfArray = make_avg.length;
//   var average = (int1 + int2 + int3+ int4+ int5 + int6) / 6;
//   console.log(sizeOfArray);
//   console.log(average.toFixed(2));
// }
// make_avg(30,50,10,20,80,90);

// task 4

// no return + Has parameter
// function odd_even(number){
//   if(number % 2 == 0){
//     console.log('The number is even');
//   }
//   else{
//     console.log('The number is odd');
//   }
// }
// odd_even(9);

// Has return + Has parameter
// function odd_even(number){
//   if(number % 2 === 0){
//     var evenNumber = console.log('even');
//     return evenNumber;
//   }
//   else{
//     var oddNumber = console.log('Odd');
//     return oddNumber;
//   }
// }
// odd_even(10);

//task 5

// let signal = 'yellow';

// switch(signal){
//   case 'red':
//     console.log('danger');
//     break;
//     case 'yellow':
//       console.log('Stop');
//       break;
//       default:
//         console.log('cross the road');
// }

// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone['brand']);

// function movie() {
//   return "Din-The day";
//   return "Poran";
//   return "Hawa";
// }
// console.log(movie());

// const inch = 150;
// const feet = inch / 12;
// console.log(feet);

// function mileToKilo(mile){
//   const km = mile * 1.609;
//   return km;
// }
// const kilometer =  mileToKilo(40);
// console.log(kilometer);

// function isLeapYear (year){
//   const reminder = year % 4;
//   if(reminder == 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// const giveYear = isLeapYear(2023);
// console.log(giveYear);

// function isLeapYear (year){
//   if(year % 4 == 0 && year % 400 == 0){
//     return true;
//   }
//     return false;
// }

// const giveYear = isLeapYear(2000);
// console.log(giveYear);

// function getSumOfAnArray(numbers){
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i ++){
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
//   }
//   return sum;
// }

// function getOddNumbers(numbers){
//   const oddNumbers = [];
//   for(let i = 0; i < numbers.length; i ++){
//     const index = i;
//     const element = numbers[index];
//     if(element % 2 !== 0){
//       oddNumbers.push(element);
//     }
//   }
//   return oddNumbers;
// }

// const number = [50,40,65,30,89,70,15,17];
// const getOddNumber = getOddNumbers(number);
// const oddSum = getSumOfAnArray(getOddNumber);
// console.log(oddSum);

// function sumOfNumbers(numbers){
//   let sum = 0;
//   for(let i = 1; i <= numbers; i++){
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumOfNumbers(8));

// function factorial(numbers){
//   let fact = 1;
//   let i = numbers;
//   while(i >=1){
//      fact = fact * i;
//      i--;
//   }
//   return fact;
// }

// console.log(factorial(9));

//Task 1 module 20

// function getMinute(hour){
//   const minute = hour * 60;
//   return minute;
// }
// console.log(getMinute(10));

// function getSecond(second){
//   const minute = second / 60;
//   return minute;
// }
// console.log(getSecond(960));

//Task 2 module 20

// function findLeapYear(leapYear){
//   const isLeapYear = [];
//   for(i = 0; i < leapYear.length; i ++){
//     const index = i;
//     const element = leapYear[index];
//     if(element % 4 == 0){
//     isLeapYear.push(element);
//   }
// }
// return isLeapYear;
// }

//  const leap = [2023,2024,2025,2028,2030];
//  const getLeapYear = findLeapYear(leap);
//  console.log('Leap Year are = ' + getLeapYear);


