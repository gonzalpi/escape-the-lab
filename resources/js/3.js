var a;
var ans = 4319;
// var ans = 6281;
function getVal() {
    a = document.getElementById("n1");
}
function onClick() {
    if (a.value == ans){
        alert("Correcto")
        window.location.href = "../cafetera/index.html";
    }
}