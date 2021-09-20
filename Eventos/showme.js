var boton1 = document.querySelector("#money");
var boton2 = document.querySelector("#miami");
var boton3 = document.querySelector("#comandante");

var money = document.querySelector("#moneyimg");
var miami = document.querySelector("#miamiimg");
var comandante = document.querySelector("#comandanteimg");

boton1.addEventListener("click", function() {
    money.classList.toggle("oculto")
})

boton2.addEventListener("click", function() {
    miami.classList.toggle("oculto")
})

boton3.addEventListener("click", function() {
    comandante.classList.toggle("oculto")
})

var imagenes = document.querySelectorAll("img");
for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function() {
        this.classList.add("oculto");
    })
    
}