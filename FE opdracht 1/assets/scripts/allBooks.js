import {loadBooks} from "./main.js";


const apiURL = 'http://localhost:3000/api/books';

fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        loadBooks(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


