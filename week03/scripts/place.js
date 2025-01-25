
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

function calculateWindChill(temp, windSpeed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

const temp = 18; 
const windSpeed = 15; 

const windChillElement = document.getElementById("windChill");

if (temp <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
