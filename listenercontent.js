



//TM
(function () {
    'use strict';
    console.log('hello from TM');


    document.addEventListener("click", (event) => {
        if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) { // Cambia ".miClase" por el selector deseado
            console.log("Has hecho clic en un elemento con la clase 'ctaLink'.");





        }
    });

})();



function verificarInputCta() {

};


//probar en consola


document.addEventListener("click", handleEvent)
document.addEventListener("focusin", handleEvent);

function handleEvent(event) {
    if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) {

        let sharedTarget = event.target;
        //console.log('seleccion compartida:');
        let ancestor = sharedTarget.closest('.coral-Form-fieldwrapper');
        let validationElement = ancestor.querySelector('label');
        //console.log(validationElement);
        let specifTarget = "";
        if (validationElement.innerText === "CTA Link") {
            //console.log('seleccion CTA Link desde TM')

            let target = sharedTarget;
            const alertMssg = document.createElement('div');
            const alertContent = "the relative url should not end with '/' ";

            alertMssg.setAttribute('id', 'div_qa_validation');
            alertMssg.textContent = alertContent;
            alertMssg.style.color = 'red';

            //target.addEventListener('input', dataValidation);
            //target.addEventListener('change', dataValidation);
            target.addEventListener('focusout', dataValidation);




            function dataValidation(e) {
                let data = e.target.value;
                console.log(data);

                // Si la URL es absoluta (comienza con "https"), no hacemos nada
                if (data.startsWith("https")) {
                    return;
                }

                // Si la URL es relativa (comienza con "/")
                if (data.startsWith("/")) {
                    if (data.endsWith("/")) {
                        console.log("No puedes autorear con barra");
                        validationElement.appendChild(alertMssg);

                        return;
                    }
                    if (data.includes("?")) {
                        let trimmedData = data.split("?")[0];

                        if (trimmedData.endsWith("/")) {
                            console.log("No puedes autorear con barra");
                            validationElement.appendChild(alertMssg);

                            return;
                        }
                        e.target.value = trimmedData;
                        console.log("Valor actualizado:", trimmedData);
                    }
                }
            };

        }
    };
}











function ejecutar() {
    let allInputs = document.querySelectorAll('.coral3-Textfield.coral-InputGroup-input');

    let inputArray = Array.from(allInputs);

    let outputInput = [];
    let filteredInputs = inputArray.forEach((input) => {

        let fieldWrapper = input.closest('.coral-Form-fieldwrapper');
        //console.log('fieldWrapper element found');


        if (fieldWrapper) {
            let label = fieldWrapper.querySelector('label');
            if (label && label.innerText.trim() === 'CTA Link') {
                inputArray.push(input);
            }
        }

    });

    console.log(filteredInputs);
}
ejecutar();







