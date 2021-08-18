// btn sumar 

const valorSuma = document.getElementById("btn-sumar");
valorSuma.addEventListener("click", function(){
    let sumanum1 = document.querySelector("#valor1").value;
    sumanum1 = parseInt(sumanum1);
    let sumanum2 = document.querySelector("#valor2").value;
    sumanum2 = parseInt(sumanum2);
    let resultadoSum = sumanum1 + sumanum2;
    document.querySelector(".resultado").innerHTML = resultadoSum;

});

// btn restar 
/*aqui realizo lo mismo anterior
pero si el resultado es menor a zero solo muestro zero  */

const valorResta = document.getElementById("btn-restar");
valorResta.addEventListener("click", function(){
    let restanum1 = document.querySelector("#valor1").value;
    restanum1 = parseInt(restanum1);
    let restanum2 = document.querySelector("#valor2").value;
    restanum2 = parseInt(restanum2);

    let resultadoResta = restanum1 - restanum2;

    if (resultadoResta < 0) {
        let resultadoZero = 0;
        document.querySelector(".resultado").innerHTML = resultadoZero;

    } else {
        document.querySelector(".resultado").innerHTML = resultadoResta;

    }
});