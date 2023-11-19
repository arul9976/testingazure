var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

var n3 = document.getElementById("num3");
var n4 = document.getElementById("num4");
var res1 = document.getElementById("result1")

var n5 = document.getElementById("num5")
var n6 = document.getElementById("num6")
var res2 = document.getElementById("result2")

// t1
var t1 = document.getElementById("total")
var t2 = document.getElementById("total1")
var t3 = document.getElementById("total2")

var all = document.getElementById("toall")



// result

document.getElementById("sub").addEventListener
("click", function()  {
    res.value = parseInt(n1.value)-parseInt(n2.value)
})
document.getElementById("sub").addEventListener
("click", function()  {
    res1.value = parseInt(n3.value)-parseInt(n4.value)
})
document.getElementById("sub").addEventListener
("click", function()  {
    res2.value = parseInt(n5.value)-parseInt(n6.value)
})


// total

document.getElementById("sum").addEventListener
("click", function()  {
    t1.value = parseInt(res.value)*80
})
document.getElementById("sum").addEventListener
("click", function()  {
    t2.value = parseInt(res1.value)*30
})
document.getElementById("sum").addEventListener
("click", function()  {
    t3.value = parseInt(res2.value)*50
})


document.getElementById("all").addEventListener
("click", function()  {
    all.value = parseInt(t1.value)+parseInt(t2.value)+parseInt(t3.value)
})