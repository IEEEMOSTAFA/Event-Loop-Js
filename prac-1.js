// let num = 0;
// const clockId = setInterval(() => {
//     num++;
//     console.log(num,"Hello Chandu");
// },3000);


function delaygreeting(name,delay){
    setTimeout(() => {
        console.log(`${name} : hellow chandu`);
        
    }, delay);
}
delaygreeting("mostafa",3000);