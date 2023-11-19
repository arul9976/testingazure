let outputscreen = document.getElementById("output-screen");

function display(num){
    outputscreen.value += num;
}
function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);

    } catch(err){
        alert(invalid);
    }
}
function Clear(){
    outputscreen.value = '';
}
function Del(){
    outputscreen.value = outputscreen.value.slice(0,-1)
}