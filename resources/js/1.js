var a;
var b;
var c;
var d;
var ans = [13, 5, 9, 2];
// var ans = [5, 13, 2, 9];
function getVal() {
    a = document.getElementById("n1");
    b = document.getElementById("n2");
    c = document.getElementById("n3");
    d = document.getElementById("n4");
}
function onClick() {
    if (a.value == ans[0] && b.value == ans[1] && c.value == ans[2] && d.value == ans[3]){
        alert("Correcto")
        window.location.href = "../snowden";
    }
}