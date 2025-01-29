
const currentYear = new Date().getFullYear();

document.querySelector('footer p:first-of-type').textContent = `© ${currentYear} All rights reserved.`;

document.querySelector('footer p:nth-of-type(2)').textContent = `Note this ⚙️ CodePen summary of using the Date object in different ways. Last modified: ${document.lastModified}`;
