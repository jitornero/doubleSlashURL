document.addEventListener("focusout", (event) => {
    // Verificamos que el evento sea en un input dentro de un formulario
    if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) {
        const target = event.target;
        const ancestor = target.closest('.coral-Form-fieldwrapper');
        const label = ancestor.querySelector('label').innerText;

        // Lista de etiquetas válidas para los que necesitamos validación
        const validLabels = ["CTA Link", "CTA URL", "CTA Image", /* añade más */];

        // Si la etiqueta está en la lista, se realiza la validación
        if (validLabels.includes(label)) {
            handleFocusOut(target, ancestor, label);
        }
    }
});

function handleFocusOut(target, container, label) {
    // Agregar retraso antes de realizar la validación
    setTimeout(() => {
        const data = target.value;
        const divId = "div_qa_validation";
        const ariaExpanded = target.getAttribute("aria-expanded");

        // Si el dropdown está cerrado (aria-expanded = false)
        if (ariaExpanded === "false") {
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
    }, 100); // Ajusta este retraso si es necesario
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
