document.addEventListener('DOMContentLoaded', () => {
    const state = document.body.getAttribute('data-state');
    fetch('https://run.mocky.io/v3/5df292ec-280d-432c-9b89-a8cdfc39948d')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const population = data[state] || 'Data not found';
            document.getElementById('population').textContent = population.toLocaleString();
        })
        .catch(error => {
            console.error('Error fetching population data:', error);
            document.getElementById('population').textContent = 'Error loading data: ' + error.message;
        });
});