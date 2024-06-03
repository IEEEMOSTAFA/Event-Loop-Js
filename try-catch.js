function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value ;
}

// try {
//     console.log('bBaria');
// }
try {
    const age = parseInt(ageText);
    if(isNaN(age)){
        // console.log('age not found',age,ageText)
        throw "please enter a number"
    }
    else if (age < 18){
        throw "bacca knot allowed"; // throw new Error("bacca not allowed"); // throw "bacca not allowed";
    }
    else if (age > 30){
        throw "murobbi ra aisen na";
    }
    errorTag.innerHTML = '';
}
catch (err) {
    console.log('Error:', err)
    errorTag.innerHTML = 'ERROR:' + err;
}
finally {
    {
        console.log('Finally Block')
    }
    console.log(111111);
}