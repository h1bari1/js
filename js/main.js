// call
// const sum = (a,b,c) => a + b + c;
// function sum2 (a,b,c){
//     return `${this.test}: ${a + b + c}`
// }
// console.log(sum(1,2,3))
// console.log(sum2(1,2,3))
// console.log(sum2.call(null,1,2,3))
//
//
// const obj = {
//     test: 'result: ',
// }
// console.log(sum2.call(obj,1,2,3))
//
// //apply
// console.log(sum2.apply(obj,[1,2,3]))

// const li = document.querySelectorAll('li')
// // const newLi = Array.from(li)
// // const newLi = Array.prototype.slice.call(li)
// // const sum = [].slice.call(li)
// const sum = [].reduce.call(li, (acc , elem) =>  acc + parseInt(elem.textContent),0)
// console.log(sum)
// const arr = [43,423,434,23,423,44,44,32,2,3234]
// console.log(Math.max(...arr))
// console.log(Math)
// console.log(Math.max.apply(null,arr))

//bind
// function sum2 (a,b,c){
//     return `${this.test}: ${a + b + c}`
// }
// const obj = {
//     test: 'result: ',
// }
// const test = sum2.bind(obj, 1,2,3)
// console.log(test())

// class User {
//     constructor(name) {
//         this.name = name
//         this.other = this.other.bind(this)
//     }
//     remove(){
//         this.user.addEventListener('click', )
//     }
//     other(){
//         console.log(this)
//     }
// }

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
// console.log(random(3,5))

const nums = [];
const opt = {
    count: 8,
    min: 1,
    max: 6,
};
const {count, min, max} = opt;

for (let i = 0; i < count; i++) {
    nums.push(random(min,max))
}
console.log(nums)
