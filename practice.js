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

function reverse(num) {
  let result = [];
  for (let i = num.length - 1 ; i >= 0; i--) {
    result.push(num[i]);
  }
  return result;
}
console.log(reverse([1, 2, 3, 4, 5, 6]));

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


