function updateFooterDates() {
    const yearElem = document.getElementById('year');
    const lastModifiedElem = document.getElementById('last-modified');
    if (yearElem) {
      yearElem.textContent = `${new Date().getFullYear()}`;
    }
    if (lastModifiedElem) {
      lastModifiedElem.textContent = `${document.lastModified}`;
    }
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
  
    if (!name || !email || !message) {
      alert(`All fields are required! Please fill in every field.`);
      return;
    }
  
    const submission = {
      name: name,
      email: email,
      message: message,
      date: `${new Date().toLocaleString()}`
    };
  
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    submissions.push(submission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  
    alert(`Thank you, ${name}! Your message has been received.`);
    form.reset();
    displaySubmissions();
  }
  
  function displaySubmissions() {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    console.log(`All Submissions:`);
    submissions.forEach((submission, index) => {
      console.log(`${index + 1}: ${submission.name} (${submission.email}) on ${submission.date}`);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    updateFooterDates();
  
    const contactForms = document.querySelectorAll('form.contact-form');
    contactForms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });
  });
  