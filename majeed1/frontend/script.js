// Script for the landing page
// Get the navigation button
const weatherPageBtn = document.getElementById('weatherPageBtn');

// Add an event listener to the button to navigate to the weather page
weatherPageBtn.addEventListener('click', () => {
    // Redirect to the weather page
    window.location.href = 'weather.html';
});

// Script for the weather page
// Get references to the elements
document.addEventListener('DOMContentLoaded', function() {
    const dateForm = document.getElementById('dateForm');
    const selectedDate = document.getElementById('selectedDate');
    const weatherDescription = document.getElementById('weatherDescription');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const weatherInfo = document.getElementById('weather-info');

    dateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedDateValue = document.getElementById('dateInput').value;

        fetch(`http://localhost:8000/weather?city=Kokkola&date=${selectedDateValue}`)
            .then(response => response.json())
            .then(data => {
                selectedDate.textContent = selectedDateValue;
                weatherDescription.textContent = data.weather[0].description;
                temperature.textContent = data.main.temp;
                humidity.textContent = data.main.humidity;
                windSpeed.textContent = data.wind.speed;

                weatherInfo.style.display = 'block';
            })
            .catch(error => {
                console.error(error);
                selectedDate.textContent = '';
                weatherDescription.textContent = 'Error fetching weather data';
                temperature.textContent = '';
                humidity.textContent = '';
                windSpeed.textContent = '';

                weatherInfo.style.display = 'none';
            });
    });
});