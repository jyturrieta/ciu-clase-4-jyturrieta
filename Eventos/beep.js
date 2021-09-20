var body = document.querySelector("body")

var agregarTexto = function(){
    body.insertAdjacentHTML("beforeend", "<p>MARADOOOOOO</p>")
}

document.querySelector("body").addEventListener("click", agregarTexto)
