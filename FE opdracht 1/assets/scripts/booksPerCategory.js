import {loadBooks} from "./main.js";

document.getElementById('category').onchange = setCategory;

const baseURL = 'http://localhost:3000/api/booksPerCategory/';
function setCategory(){
    let category = document.getElementById('category').value
    let categoryURL = baseURL + category;
    console.log(categoryURL);
    fetch(categoryURL)
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
}

setCategory();