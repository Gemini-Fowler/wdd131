

const currentYear = new Date().getFullYear();

document.querySelector('footer p:first-of-type').textContent = `© ${currentYear} All rights reserved.`;

document.querySelector('footer p:nth-of-type(2)').textContent = `Last modified: ${document.lastModified}`;
