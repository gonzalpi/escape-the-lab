var a;
var ans = 174;
// var ans = 125;
function getVal() {
    a = document.getElementById("n1");
}
function onClick() {
    if (a.value == ans){
        alert("Correcto")
        window.location.href = "../nemo";
    }
}