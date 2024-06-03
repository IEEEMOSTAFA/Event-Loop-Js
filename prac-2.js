function tellJoke(){
    console.log("Why don't scientists trust atoms?");

}
let num = 0;
const jokeInterval = setInterval(() =>{
    num++;
    if(num > 4){
        clearInterval(jokeInterval);
    }
    console.log(num)
    tellJoke();
    
},2000);