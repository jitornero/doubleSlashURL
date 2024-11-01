
//const elements = $x("//section[contains(@class, 'fgx-brand-accordion-item')]");
//Options o Specs según boton
const models = {

  selector4:"document.querySelectorAll('section[class*='fgx-brand-accordion-item']')[0]",
  selector5:"section[class*='fgx-brand-accordion-item']"
}


const elements = document.querySelectorAll("section[class*='fgx-brand-accordion-item']");


function chooseAccordion (section){

    const elementsWithNbsp = [];
    elements[section].querySelectorAll('td').forEach(element => {
        if (element.innerHTML.includes('&nbsp;')) {
          elementsWithNbsp.push(element);
        }
      });
      
    const newWindow = window.open('', '_blank');
    
    
    let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Elements with &nbsp;</title>
      <style>
        table { border-collapse: collapse; width: 100%; }
        td, th { border: 1px solid black; padding: 8px; }
        th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      <h1>Elements with &nbsp;</h1>
      <table>
        <thead>
          <tr>
            <th>Text Content</th>
            <th>Outer HTML</th>
          </tr>
        </thead>
        <tbody>`;
    
    elementsWithNbsp.forEach(element => {
      const outerHTMLWithNbsp = element.outerHTML.replace(/\u00A0/g, '&nbsp;');
    
      const escapedOuterHTML = outerHTMLWithNbsp
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    
      htmlContent += `
          <tr>
            <td>${element.textContent}</td>
            <td><pre>${escapedOuterHTML}</pre></td>
          </tr>`;
    });
    
    htmlContent += `
        </tbody>
      </table>
    </body>
    </html>`;
    
    newWindow.document.write(htmlContent);
    newWindow.document.close();
    

}


chooseAccordion()







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