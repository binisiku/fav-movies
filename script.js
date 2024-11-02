// script.js

let movies = [];

document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get input values
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const year = document.getElementById('year').value;

    // Create a movie object
    const movie = {
        title: title,
        director: director,
        year: year
    };

    // Add the movie to the array
    movies.push(movie);

    // Clear the form
    this.reset();

    // Update the movie table
    updateTable();
});

function updateTable() {
    const tableBody = document.getElementById('movieTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    // Loop through the movies array and create a new row for each movie
    movies.forEach((movie) => {
        const row = tableBody.insertRow();
        const cellTitle = row.insertCell(0);
        const cellDirector = row.insertCell(1);
        const cellYear = row.insertCell(2);

        cellTitle.textContent = movie.title;
        cellDirector.textContent = movie.director;
        cellYear.textContent = movie.year;
    });
}
