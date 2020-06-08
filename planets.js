
var resulVal = document.getElementById("Result");
var inputVal = document.getElementById("input_item");
//here we get the values

//Functions
function mars (){
    var input = parseInt(inputVal.value)
    var mars_weight = (input/9.81) * 3.711;
    resulVal.innerHTML = `your weight on Mars is ${mars_weight.toFixed(2)}`
}
function moon(){
    var input = parseInt(inputVal.value)
    var moon_weight = (input/9.81) * 1.62;
    resulVal.innerHTML = `your weight on the Moon is ${moon_weight.toFixed(2)}`
}
function jupiter (){
    var input = parseInt(inputVal.value)
    var jupiter_weight = (input/9.81) * 24.79;
    resulVal.innerHTML = `your weight on Jupiter is ${jupiter_weight.toFixed(2)}` 
}
function titan (){
    var input = parseInt(inputVal.value)
    var jupiter_weight = (input/9.81) * 1.352;
    resulVal.innerHTML = `your weight on Titan is ${jupiter_weight.toFixed(2)}` 
}



