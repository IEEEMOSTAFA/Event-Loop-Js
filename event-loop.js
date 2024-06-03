// function a(){
//     console.log('a');
//     b();
//     console.log('aa');
// }
// function b(){
//     console.log('b');
//     console.log('bb');
// }
// setTimeout(() => {
// console.log('inside Timeout')
// },2000) 
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// a();

function a(){
    console.log("Mostafa 66");
    b();
}
function b(){
    setTimeout(() => {console.log("Media Teck Processor")},3000)
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
a();