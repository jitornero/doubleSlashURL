document.addEventListener("focusout", (event) => {
    // Verificamos que el evento sea en un input dentro de un formulario
    if (event.target.matches(".coral3-Textfield.coral-InputGroup-input")) {
        const target = event.target;
        const ancestor = target.closest('.coral-Form-fieldwrapper');
        const label = ancestor.querySelector('label').innerText;

        // Lista de etiquetas válidas para los que necesitamos validación
        const validLabels = ["CTA Link", "CTA URL", "CTA Image", "Back Button Link", "First Shopping Tool Path","Second Shopping Tool Path","Link URL","Vehicle Page","KBA URL","Compare Models CTA URL", "Model Item CTA URL", "Previous Link","Next Link","Order Now Button Link"];

        // Si la etiqueta está en la lista, se realiza la validación
        if (validLabels.includes(label)) {
            handleValidationWithAria(target, ancestor, label);
        }
    }
});

function handleValidationWithAria(target, container, label) {
    const divId = "QA_" + target.id;
    const maxWaitTime = 2000;  // 2 segundos máximo
    const startTime = Date.now();  // Guardamos el momento de inicio

    function checkAriaExpanded() {
        const ariaExpanded = target.getAttribute('aria-expanded');
        
        if (ariaExpanded === 'false') {
            // Si el dropdown está cerrado (aria-expanded = false), ejecutamos la validación
            executeValidation(target, container, label, divId);
        } else {
            // Si no, verificamos nuevamente hasta que pasen 2 segundos o se cierre el dropdown
            if (Date.now() - startTime < maxWaitTime) {
                setTimeout(checkAriaExpanded, 50);  // Esperamos 50 ms y verificamos nuevamente
            } else {
                // Si el tiempo se agotó, ejecutamos la validación (o algo adicional si es necesario)
                executeValidation(target, container, label, divId);
            }
        }
    }

    // Iniciamos la verificación
    checkAriaExpanded();
}

function executeValidation(target, container, label, divId) {
    const data = target.value;

    if (data.startsWith("https")) {
        removeValidationMessage(divId);
    } else if (data.startsWith("/")) {
        validationRelative(data, container, divId);
    } else {
        removeValidationMessage(divId);
    }
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