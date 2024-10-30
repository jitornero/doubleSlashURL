

const components02Selector = document.querySelector(".vehicleAttributes.section");

if (components01Selector) {
    const elementsWithNbsp = [];

    // Traverse all nodes within the container
    components01Selector.querySelectorAll("*").forEach(element => {
        const hasUnicodeNbsp = element.textContent.includes('\u00A0');
        const hasPlainTextNbsp = element.innerHTML.includes('&nbsp;');

        // If the element directly contains &nbsp; as either unicode or plain text
        // Ensure that it is not a parent of another element containing &nbsp;
        if ((hasUnicodeNbsp || hasPlainTextNbsp) && element.childElementCount === 0) {
            elementsWithNbsp.push(element);
            // Highlight the element on the page
            element.style.border = "3px solid green";
        }
    });

    console.log("Elements with &nbsp; in twoColumnBillboardSection found:", elementsWithNbsp);
} else {
    console.warn("No element found with the specified selector.");
}
