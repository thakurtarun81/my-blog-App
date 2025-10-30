// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     resolve("sucess");
//     // reject("error");
//   });
// };
// getPromise()
//   .then((res) => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log("error");
//   });

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data3");
      resolve("success");
    }, 4000);
  });
}
asyncFunc1().then((res) => {
  console.log("fetching data1...");

  asyncFunc2().then((res) => {
    console.log("fetching data2...");

    asyncFunc3().then((res) => {
      console.log("fetching data3...");
    });
  });
}).catch(()=>{
    console.log("error")
});
