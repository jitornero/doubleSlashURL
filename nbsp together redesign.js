
const parentElement = document.querySelector("main");

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

