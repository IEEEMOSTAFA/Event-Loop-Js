// console.log(1)
// console.log(2)
// // setTimeout(() => {
// //     console.log(3);
// // })

// setTimeout(() => {console.log(3)},4000);
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// let num = 0;
// const clockId = setInterval( () => {
//     num++;
//     if(num > 1){
//         clearInterval(clockId);
//     }
//     // clearInterval(clockId);
//     console.log(clockId,num)
// },2000)

console.log(1)
console.log(2)
console.log(3)
setTimeout(() => {console.log(4)},3000);
console.log(5)

let num = 0;
const clockId = setInterval(() => {num++;
    if(num > 5){
        clearInterval(clockId);
    }
    console.log(clockId,num);
},3000)
