var a;
var ans = "apollo";
// var ans = "billar";
function getVal() {
    a = document.getElementById("n1");
}
function onClick() {
    if (a.value == ans){
        alert("Correcto")
        window.location.href = "../ilusionistas/index.html";
    }
}