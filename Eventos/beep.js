var body = document.querySelector("body")
var boton = document.querySelector("button")

var seEjecutaEnEvento = function(){
    body.classList.toggle("color")
    body.insertAdjacentHTML("beforeend", "<p>BEEEEEEP</p>")
}

boton.addEventListener("click", seEjecutaEnEvento)
