


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

                if (data.startsWith("https")) {
                    removeValidationMessage(divId);
                    return;
                }

                if (data.startsWith("/")) {

                    validationRelative(data, validationElement, divId)
                } else {
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
        if (trimmedData.endsWith("/") == true) {
            console.log("No puedes autorear con barra");
            addValidationMessage(validationElement, divId, "The relative URL should not end with '/'");
            return;
        }
        else {
            removeValidationMessage(divId)
        }
        e.target.value = trimmedData;
        console.log("Valor actualizado:", trimmedData);
    }
    else if (data.endsWith("/") == false) {
        removeValidationMessage(divId)

    }

}

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


function removeValidationMessage(divId) {
    const existingDiv = document.getElementById(divId);
    if (existingDiv) {
        existingDiv.remove();
    }
}

