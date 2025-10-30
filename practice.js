// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(sort([1, 2, 3, 9, 3, 4, 2, 8, 6, 9, 7]));

// const { object } = require("yup");

// function print(num) {
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//   }
//   return num;
// }
// console.log(print(50));

// function sum(num) {
//   let result = 0;
//   for (let i = 0; i < num.length; i++) {
//     result += num[i];
//   }
//   return result;
// }
// console.log(sum([1, 2, 3, 4, 10]));

// function even() {
//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//       console.log("odd number =  " + i);
//     }
//   }
//   return;
// }
// even();

// function test(num) {
//   let evensum = 0;
//   let podd = 1;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       evensum += i;
//     } else {
//       podd *= i;
//     }
//   }
//   return { evensum, podd };
// }
// console.log(test(20));

// let arr = [1, 2, 3, 4, 5, 6];
// let reversed = arr.reverse();
// console.log(reversed);

// function reverse(num) {
//   let result = [];
//   for (let i = num.length - 1 ; i >= 0; i--) {
//     result.push(num[i]);
//   }
//   return result;
// }
// console.log(reverse([1, 2, 3, 4, 5, 6]));

// function max(arr) {
//   let maxnum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxnum) {
//       maxnum = arr[i];
//     }
//   }
//   return maxnum;
// }
// console.log(max([1, 2, 3, 4, 5, 6]));

// function largest(number) {
//   let max = -Infinity;
//   let second = -Infinity;

//   for (let i = 0; i < number.length; i++) {
//     if (number[i] > max) {
//       second = max;
//       max = number[i];
//     }
//   }
//   return second;
// }
// console.log(largest([1, 2, 3, 4, 5, 6]));

// function doHomework(subject, callback) {
//   console.log(`Starting my ${subject} homework...`);
//   setTimeout(() => {
//     console.log(`${subject} homework is done!`);
//     callback();
//   }, 2000);
// }
// +

// function playGame() {
//   console.log("Now I can play games!");
// }

// doHomework("Math", playGame);

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i] = temp;
//     }
//   }
//   return arr;
// }
// console.log(sort([1, 5, 2, 7, 3, 8]));

// function sort(arr) {
//   let finalsorted = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   // return arr;
// for(let i =0; i<arr.length; i++){
//   if(arr[i] !==arr[i+1]){
//     finalsorted.push(arr[i])
// break;
//   }
// } return finalsorted;
// }
// console.log(sort([1, 6, 2, 6, 3, 4, 5]));

// function check(age){
//   if( age >=18){
//     console.log("adult")
//   } else if(age < 18 || age >=10){
//        console.log("not adult")
//   } else{
//     console.log(" child")
//   }

// }
// check(12);

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// let i = 0;
// while (i < 5) {
//   console.log("Number : ", i);
//   i++;
// }

// let map1 =array1.map(num => num*2)
// console.log(map1);

// Array.prototype.mymap = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i));
//   }
//   return result;
// };
// const arr = [1, 2, 3, 4, 5];
// let finalmap = arr.mymap((num, i) => {
//   console.log(num, i);
//   return num * 2;
// });
// let finalmap1 = arr.map((num, i) => {
//   console.log(num, i);
//   return num * 2;
// });
// console.log();
// console.log(finalmap);

// class Abc {
//   constructor() {}
// }

// let obj = {
//   person1: {
//     name: "Akki",
//     age: 23,
//   },
//   person2: {
//     name: "Ankur",
//     age: 25,
//   },
// };

// for (let person of Object.values(obj)) {
//   console.log(person.name, person.age);
// }

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6];
// let arr = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr.push(arr1[i]);
// }
// for (let j = 0; j < arr2.length; j++) {
//   arr.push(arr2[j]);
// }
// console.log(arr);

// function main(name, cb) {
//   console.log("Tarun");

//   function cb() {
//     console.log("is good");
//   }
// }
// console.log(main());

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    // resolve("success");
    reject("error");
  });
};
let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled");
});
promise.catch((err) => {
  console.log("rejected");
});
