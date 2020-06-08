
var resulVal = document.getElementById("Result");
var inputVal = document.getElementById("input_item");
//here we get the values

//Functions
function mars (){
    var input = parseInt(inputVal.value)
    var mars_weigth = (input/9.81) * 3.711;
    resulVal.innerHTML = `your weigth on mars is ${mars_weigth.toFixed(2)}`
}
function moon(){
    var input = parseInt(inputVal.value)
    var moon_weigth = (input/9.81) * 1.62;
    resulVal.innerHTML = `your weigth on the moon is ${moon_weigth.toFixed(2)}`
}
function jupiter (){
    var input = parseInt(inputVal.value)
    var jupiter_weigth = (input/9.81) * 24.79;
    resulVal.innerHTML = `your weigth on Jupiter is ${jupiter_weigth.toFixed(2)}` 
}



