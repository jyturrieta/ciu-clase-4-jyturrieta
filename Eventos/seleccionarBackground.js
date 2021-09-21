var body = document.querySelector("body");
var boton = document.querySelector("#cambiarColor");


function cambiarColor(){
    var colorValue = document.getElementById('colorInput').value;
    body.style.backgroundColor = colorValue
}



