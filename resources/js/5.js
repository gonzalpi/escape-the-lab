var a;
var ans = "cozumel";
// var ans = "bacalar";
function getVal() {
    a = document.getElementById("n1");
}
function onClick() {
    if (a.value.toLowerCase() == ans){
        alert("Correcto")
        window.location.href = "../acertijo/index.html";
    }
}