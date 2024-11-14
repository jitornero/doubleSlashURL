



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
document.addEventListener("click", (event) => {
    if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) { // Cambia ".miClase" por el selector deseado

        let sharedTarget = event.target;
        //console.log('seleccion compartida:');
        let ancestor = sharedTarget.closest('.coral-Form-fieldwrapper');
        let validationElement = ancestor.querySelector('label');
        //console.log(validationElement);
        let specifTarget = "";
        if (validationElement.innerText === "CTA Link") {
            console.log('seleccion CTA Link desde TM')

            let target = sharedTarget;
            target.addEventListener('input', dataValidation);

            function dataValidation(e){
                console.log('el valor del input esta siendo cambiado')
            }
        }
    }
});










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







