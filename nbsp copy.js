
//const elements = $x("//section[contains(@class, 'fgx-brand-accordion-item')]");
//Models 3 secciones
//	Componente 01
//Class: twoColumnBillboard section
//Class:vehicleAttributes section
//Class: threeColumnFeature section

//const components01Selector = document.querySelector(".twoColumnBillboard.section");
//const components02Selector = document.querySelector(".vehicleAttributes.section");
//const components03Selector = document.querySelector(".threeColumnFeature.section");




const components01Selector = document.querySelector(".twoColumnBillboard.section");

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


// function chooseAccordion (section){

//     const elementsWithNbsp = [];
//     components01Selector.querySelectorAll('td').forEach(element => {
//         if (element.innerHTML.includes('&nbsp;')) {
//           elementsWithNbsp.push(element);
//         }
//       });
      
//     const newWindow = window.open('', '_blank');
    
    
//     let htmlContent = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Elements with &nbsp;</title>
//       <style>
//         table { border-collapse: collapse; width: 100%; }
//         td, th { border: 1px solid black; padding: 8px; }
//         th { background-color: #f2f2f2; }
//       </style>
//     </head>
//     <body>
//       <h1>Elements with &nbsp;</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Text Content</th>
//             <th>Outer HTML</th>
//           </tr>
//         </thead>
//         <tbody>`;
    
//     elementsWithNbsp.forEach(element => {
//       const outerHTMLWithNbsp = element.outerHTML.replace(/\u00A0/g, '&nbsp;');
    
//       const escapedOuterHTML = outerHTMLWithNbsp
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&#39;');
    
//       htmlContent += `
//           <tr>
//             <td>${element.textContent}</td>
//             <td><pre>${escapedOuterHTML}</pre></td>
//           </tr>`;
//     });
    
//     htmlContent += `
//         </tbody>
//       </table>
//     </body>
//     </html>`;
    
//     newWindow.document.write(htmlContent);
//     newWindow.document.close();
    

// }


// chooseAccordion()







//Nueva versión options
//elements - 
//const elements = $x("//section[contains(@class, 'fgx-brand-accordion-item')]");

// const elements = document.querySelector(".xf_content-container");
// function chooseAccordion (section){

//     const elementsWithNbsp = [];
//     elements.querySelectorAll('td').forEach(element => {
//         if (element.innerHTML.includes('&nbsp;')) {
//           elementsWithNbsp.push(element);
//         }
//       });
      
//     const newWindow = window.open('', '_blank');
    
    
//     let htmlContent = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Elements with &nbsp;</title>
//       <style>
//         table { border-collapse: collapse; width: 100%; }
//         td, th { border: 1px solid black; padding: 8px; }
//         th { background-color: #f2f2f2; }
//       </style>
//     </head>
//     <body>
//       <h1>Elements with &nbsp;</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Text Content</th>
//             <th>Outer HTML</th>
//           </tr>
//         </thead>
//         <tbody>`;
    
//     elementsWithNbsp.forEach(element => {
//       const outerHTMLWithNbsp = element.outerHTML.replace(/\u00A0/g, '&nbsp;');
    
//       const escapedOuterHTML = outerHTMLWithNbsp
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&#39;');
    
//       htmlContent += `
//           <tr>
//             <td>${element.textContent}</td>
//             <td><pre>${escapedOuterHTML}</pre></td>
//           </tr>`;
//     });
    
//     htmlContent += `
//         </tbody>
//       </table>
//     </body>
//     </html>`;
    
//     newWindow.document.write(htmlContent);
//     newWindow.document.close();
    

// }
// chooseAccordion()