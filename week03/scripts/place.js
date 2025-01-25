// Footer: Display the current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
  // Wind chill formula for Celsius
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Static values for temperature and wind speed
const temp = 18; // °C
const windSpeed = 15; // km/h

const windChillElement = document.getElementById("windChill");

// Check conditions for wind chill calculation
if (temp <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
