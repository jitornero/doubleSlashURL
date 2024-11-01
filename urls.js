const parentElement = document.querySelector("div[role='main']");

// Crear un array para almacenar los elementos <a> y sus hrefs
const hrefsArray = [];

// Encontrar todos los elementos <a> dentro del elemento padre
const allAnchorElements = Array.from(parentElement.querySelectorAll('a'));

// Iterar sobre todos los elementos <a> encontrados
allAnchorElements.forEach(el => {
    // Verificar si el elemento <a> tiene un atributo href
    if (el.hasAttribute('href')) {
        // Agregar un objeto con el elemento y el href al array
        hrefsArray.push({
            element: el,
            href: el.getAttribute('href')
        });
    }
});

// Imprimir el array completo con los elementos y sus hrefs
console.log(hrefsArray);