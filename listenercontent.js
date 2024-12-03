document.addEventListener("focusin", handleEvent);

function handleEvent(event) {
    if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) {
        const target = event.target;
        const ancestor = target.closest('.coral-Form-fieldwrapper');
        const label = ancestor.querySelector('label').innerText;

        if (label === "CTA Link") {
            handleCTALink(target, ancestor);
        }
    }
}

function handleCTALink(target, container) {
    target.addEventListener('focusout', (e) => {
        // Agregar retraso antes de realizar la validación
        setTimeout(() => {
            const data = e.target.value;
            const divId = "div_qa_validation";
            const ariaExpanded = target.getAttribute('aria-expanded');

            // Si el dropdown está cerrado (aria-expanded = false)
            if (ariaExpanded === 'false') {
                if (data.startsWith("https")) {
                    removeValidationMessage(divId);
                    return;
                }

                if (data.startsWith("/")) {
                    validationRelative(data, container, divId);
                } else {
                    removeValidationMessage(divId);
                }
            }
        }, 1500); // Espera de 100ms (puedes ajustar este valor según sea necesario)
    });
}

function validationRelative(data, validationElement, divId) {
    if (data.endsWith("/")) {
        addValidationMessage(validationElement, divId, "The relative URL should not end with '/'");
        return;
    }

    if (data.includes("?")) {
        const trimmedData = data.split("?")[0];
        if (trimmedData.endsWith("/")) {
            addValidationMessage(validationElement, divId, "The relative URL should not end with '/'");
        } else {
            removeValidationMessage(divId);
        }
    } else {
        removeValidationMessage(divId);
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
