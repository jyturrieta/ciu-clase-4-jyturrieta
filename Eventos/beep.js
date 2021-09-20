var body = document.querySelector("body")

var seEjecutaEnEvento = function(){
    body.classList.toggle("color")
    body.insertAdjacentHTML("beforeend", "<p>BEEEEEEP</p>")
}

document.querySelector("body").addEventListener("click", seEjecutaEnEvento)
