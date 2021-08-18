
//llamado a escuchar el primer boton y cambio de color
const botonred = document.getElementById("btn-1");
botonred.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #e53e3e; border: 1px solid black; width: 100%; height: 100%");
});
//llamado a escuchar el 2do boton y cambio de color
const botonorange = document.getElementById("btn-2");
botonorange.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #dd6b20; border: 1px solid black; width: 100%; height: 100%");
});

//llamado a escuchar el 3er boton y cambio de color
const botonyellow = document.getElementById("btn-3");
botonyellow.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #faf089; border: 1px solid black; width: 100%; height: 100%");
});
//llamado a escuchar el 4to boton y cambio de color
const botongreen = document.getElementById("btn-4");
botongreen.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #48bb78; border: 1px solid black; width: 100%; height: 100%");
});
//llamado a escuchar el 5to boton y cambio de color
const botonblue = document.getElementById("btn-5");
botonblue.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #81e6d9; border: 1px solid black; width: 100%; height: 100%");
});

//llamado a escuchar el 6to boton y cambio de color
const botonpink = document.getElementById("btn-6");
botonpink.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #d53f8c; border: 1px solid black; width: 100%; height: 100%");
});