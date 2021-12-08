// 1. Write your own MyPromise class with syncThen method.
// //Example:
// let promise = new MyPromise((resolve) => {
//     console.log(1);
//     resolve();
// }).synchThen(()	=> {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// })
// console.log(4);
// //1, 2, 4, 3
class MyPromise {
  constructor(fn) {
    this.promise = new Promise(fn); //новый промис с переданным коллбэком
  }
  then(fn) {
    this.promise.then(fn); //используем метод then для промиса с переданным коллбэком (ставит в очередь микрозадач)
    return this; //возвращаем this для чейнинга
  }
  synchThen(fn) {
    fn(); // обычный вызов переданной функции (обычный синхронный код)
    return this; //возвращаем this для чейнинга
  }
}


let promise = new MyPromise((resolve) => {
  console.log(1);
  resolve();
}).synchThen(()	=> {
  console.log(2);
}).then(() => {
  console.log(3);
})
console.log(4);


// 2. Write ReversePromise class so that ‘then’ functions are calling from the end to the start
// //Example:
// let promise = new ReversePromise((resolve) => {
//     console.log(1);
//     resolve();
// })
// .then(() => console.log(2))
// .then(() => console.log(3))
// .then(() => console.log(4))
// //1, 4, 3, 2
