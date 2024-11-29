



//TM
// (function () {
//     'use strict';
//     console.log('hello from TM');


//     document.addEventListener("click", (event) => {
//         if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) { // Cambia ".miClase" por el selector deseado
//             console.log("Has hecho clic en un elemento con la clase 'ctaLink'.");





//         }
//     });

// })();



// function verificarInputCta() {

// };


//probar en consola

v anterior
// document.addEventListener("click", handleEvent)
// document.addEventListener("focusin", handleEvent);

// function handleEvent(event) {
//     if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) {

//         let sharedTarget = event.target;
//         //console.log('seleccion compartida:');
//         let ancestor = sharedTarget.closest('.coral-Form-fieldwrapper');
//         let validationElement = ancestor.querySelector('label');
//         //console.log(validationElement);
//         let specifTarget = "";
//         if (validationElement.innerText === "CTA Link") {
//             //console.log('seleccion CTA Link desde TM')

//             let target = sharedTarget;
//             const alertMssg = document.createElement('div');
//             const alertContent = "the relative url should not end with '/' ";

//             alertMssg.setAttribute('id', 'div_qa_validation');
//             alertMssg.textContent = alertContent;
//             alertMssg.style.color = 'red';

//             //target.addEventListener('input', dataValidation);
//             //target.addEventListener('change', dataValidation);
//             target.addEventListener('focusout', dataValidation);




//             function dataValidation(e) {
//                 let data = e.target.value;
//                 console.log(data);

//                 // Si la URL es absoluta (comienza con "https"), no hacemos nada
//                 if (data.startsWith("https")) {
//                     return;
//                 }

//                 // Si la URL es relativa (comienza con "/")
//                 if (data.startsWith("/")) {
//                     if (data.endsWith("/")) {
//                         console.log("No puedes autorear con barra");
//                         validationElement.appendChild(alertMssg);

//                         return;
//                     }
//                     if (data.includes("?")) {
//                         let trimmedData = data.split("?")[0];

//                         if (trimmedData.endsWith("/")) {
//                             console.log("No puedes autorear con barra");
//                             validationElement.appendChild(alertMssg);

//                             return;
//                         }
//                         e.target.value = trimmedData;
//                         console.log("Valor actualizado:", trimmedData);
//                     }
//                 }
//             };

//         }
//     };
// }









//document.addEventListener("click", handleEvent);
document.addEventListener("focusin", handleEvent);

function handleEvent(event) {
    if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) {
        const sharedTarget = event.target;
        const ancestor = sharedTarget.closest('.coral-Form-fieldwrapper');
        const validationElement = ancestor.querySelector('label');

        if (validationElement.innerText === "CTA Link") {//


            sharedTarget.addEventListener('focusout', dataValidation);

            function dataValidation(e) {
                const data = e.target.value;
                const divId = "div_qa_validation";

                // Si la URL es absoluta (comienza con "https"), eliminar mensaje si existe
                if (data.startsWith("https")) {
                    removeValidationMessage(divId);
                    return;
                }

                // Si la URL es relativa (comienza con "/")
                if (data.startsWith("/")) {

                    validationRelative(data, validationElement, divId)
                } else {
                    // Eliminar mensaje si existe cuando el dato pasa las validaciones
                    removeValidationMessage(divId);
                }
            }
        }
    }
}


function validationRelative (data, validationElement, divId) {

    if (data.endsWith("/") == true) {
        console.log("No puedes autorear con barra");
        addValidationMessage(validationElement, divId, "The relative URL should not end with '/'");
        return;
    }
    if (data.includes("?")) {
        const trimmedData = data.split("?")[0];
        if (trimmedData.endsWith("/")) {
            console.log("No puedes autorear con barra");
            addValidationMessage(validationElement, divId, "The relative URL should not end with '/'");
            return;
        }
        e.target.value = trimmedData;
        console.log("Valor actualizado:", trimmedData);
    }
    else if (data.endsWith("/") == false) {
        removeValidationMessage(divId)

    }

}
// /**
//  * Función para agregar un mensaje de validación
//  * @param {HTMLElement} container - Elemento donde se añadirá el mensaje
//  * @param {string} divId - ID del div de validación
//  * @param {string} message - Texto del mensaje de validación
//  */
function addValidationMessage(container, divId, message) {
    let existingDiv = document.getElementById(divId);

    if (!existingDiv) {
        const alertMssg = document.createElement('div');
        alertMssg.setAttribute('id', divId);
        alertMssg.textContent = message;
        alertMssg.style.color = 'red';
        container.appendChild(alertMssg);
    }

}

// /**
//  * Función para eliminar un mensaje de validación si existe
//  * @param {string} divId - ID del div de validación a eliminar
//  */
function removeValidationMessage(divId) {
    const existingDiv = document.getElementById(divId);
    if (existingDiv) {
        existingDiv.remove();
    }
}

