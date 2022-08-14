export function validar(input) {
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores =[
    "valueMissing",
    "patternMismatch",
    "typeMismatch"
];

const mensajesDeError = {
    nombreFooter: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "El nombre debe contener como máximo 40 caracteres"
    },
    mensajeFooter:{
        valueMissing: "El campo correo no puede estar vacío",
        patternMismatch: "El nombre debe contener como máximo 120 caracteres"
    },

    emailLogin:{
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    contrasenaLogin:{
        valueMissing: "El campo contraseña no puede estar vacío"
    },

    urlNewProduct: {
        valueMissing: "El campo imagen no puede estar vacío"
    },
    nameNewProduct: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    priceNewProduct: {
        valueMissing: "El campo precio no puede estar vacío"
    },
    descriptionNewProduct: {
        valueMissing: "El campo descripción no puede estar vacío"
    }

}


function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}

