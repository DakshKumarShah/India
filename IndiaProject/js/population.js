document.addEventListener('DOMContentLoaded', () => {
    const state = document.body.getAttribute('data-state');
    fetch('579b464db66ec23bdd000001f93dc20faa91454e728a0258f629da89')
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
