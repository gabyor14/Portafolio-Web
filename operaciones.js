function sumar(){
    var n1 = document.getElementById("num1").value; //Es value porque esta resiviendo el valor 
    var n2 = document.getElementById("num2").value;
    var res = parseInt(n1)+parseInt(n2);
    document.getElementById("resultado").innerHTML = res; //Es innerHTML porque es unvalor de salida
}
function restar(){
    var n1 = document.getElementById("num1").value; //Es value porque esta resiviendo el valor 
    var n2 = document.getElementById("num2").value;
    var res = parseInt(n1)-parseInt(n2);
    document.getElementById("resultado").innerHTML = res; //Es innerHTML porque es unvalor de salida
}
function dividir(){
    var n1 = document.getElementById("num1").value; //Es value porque esta resiviendo el valor 
    var n2 = document.getElementById("num2").value;
    var res = parseFloat(n1)/parseFloat(n2);
    document.getElementById("resultado").innerHTML = res; //Es innerHTML porque es unvalor de salida
}
function multiplicar(){
    var n1 = document.getElementById("num1").value; //Es value porque esta resiviendo el valor 
    var n2 = document.getElementById("num2").value;
    var res = parseFloat(n1)*parseFloat(n2);
    document.getElementById("resultado").innerHTML = res; //Es innerHTML porque es unvalor de salida
}