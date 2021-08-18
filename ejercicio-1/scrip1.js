
/*declarar la variable formulario y dentro de este al enviar validar los datos */
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    cleanErrors();
    // variables declaradas de cada imput del forms
    let nameForms = document.querySelector("#nombre").value; 
    let subjectForms = document.querySelector("#asunto").value;
    let messageTextarea = document.querySelector("#mensaje").value;

    let result = validate(nameForms, subjectForms, messageTextarea);

    if (result == true) {
        document.getElementsByClassName("resultado").innerHTML = "Mensaje enviado con exito ";
    };
});

function cleanErrors() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};
/*funcion para validar el forms con cada uno de sus inputs */
function validate(name, subject, message) {
    let validateInputs = true;
    let validateNameForms = /[a-zA-Z]/gim;
    let validateSubjectForms = /[a-zA-Z]/gim;
    let validateMessageTextarea = /[a-zA-Z]/gim;

    if (validateNameForms.test(name) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido , no se permiten numeros"
        validateInputs = false;
    };
    if (validateSubjectForms.test(subject) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido , no se permiten numeros"
        validateInputs = false;
    }
    if (validateMessageTextarea.test(message) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido , no se permiten numeros"
        validateInputs = false;
    }
    // en caso de no presentar error enviar mensaje en verde 
    else {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito";
    }
};