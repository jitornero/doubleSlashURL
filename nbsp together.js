
// const optionsSelector = document.querySelectorAll("section[class*='fgx-brand-accordion-item']")[0];
// const specsSelector = document.querySelectorAll("section[class*='fgx-brand-accordion-item']")[1];



// const parentElement = {
//     models: {
//     selector1:".twoColumnBillboard.section",
//     selector2:".vehicleAttributes.section",
//     selector3:".threeColumnFeature.section",
//     selector4: "section[class*='fgx-brand-accordion-item']:nth-child(1)",
//     selector5: "section[class*='fgx-brand-accordion-item']:nth-child(2)",
//     },
// };




// const selectors = {
//     models: {
//     selector1:".twoColumnBillboard.section",
//     selector2:".vehicleAttributes.section",
//     selector3:".threeColumnFeature.section",
//     selector4: document.querySelectorAll('section[class*='fgx-brand-accordion-item']')[0],
//     selector5: document.querySelectorAll('section[class*='fgx-brand-accordion-item']')[1],
//     },
// };


// function processAllSelector (selector) {
// const elements = document.querySelectorAll(selector);
// elements.forEach((element)=>{


// })
// };
// Seleccionar el elemento padre utilizando el selector especificado
// Seleccionar el elemento padre utilizando el selector especificado
const parentElement = document.querySelector("div[role='main']");

// Crear un array para almacenar los elementos que cumplen con la validación
const nodesArray = [];

// Función para verificar si hay &nbsp; directamente en el texto de un elemento
function hasNbspInSameLevel(element) {
    // Obtener todos los nodos de texto del elemento
    const childNodes = Array.from(element.childNodes);

    // Validar si alguno de los nodos de texto contiene &nbsp; sin considerar nodos hijos
    return childNodes.some(node => {
        // Verificar si el nodo es de tipo texto y contiene &nbsp;
        return node.nodeType === Node.TEXT_NODE && node.textContent.includes('\u00A0');
    });
}

// Encontrar todos los elementos dentro del elemento padre
const allChildElements = Array.from(parentElement.querySelectorAll('*'));

// Iterar sobre todos los elementos encontrados
allChildElements.forEach(el => {
    // Verificar si el elemento cumple con la validación
    if (hasNbspInSameLevel(el)) {
        // Si es true, agregar el elemento al array
        nodesArray.push(el);
    }
});

// Logear el array de nodos que cumplen la validación
console.log(nodesArray);



function highlightNbspInSameLevel(element) {
    const childNodes = Array.from(element.childNodes);

    childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('\u00A0')) {
            // Crear un span para envolver solo el texto en este nivel que contiene &nbsp;
            const highlightedText = document.createElement('span');
            highlightedText.style.backgroundColor = 'yellow'; // Cambia este color según prefieras
            highlightedText.textContent = node.textContent;

            // Reemplaza el nodo de texto con el span de resaltado
            element.replaceChild(highlightedText, node);
        }
    });
}

// Llama a la función en cada elemento de nodesArray
nodesArray.forEach((element) => highlightNbspInSameLevel(element));

