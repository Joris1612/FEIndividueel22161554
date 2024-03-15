import { books } from "./books.js";

// Main function for validating the form
window.validateForm = function () {

// Select DOM elements for necessary validation
    let titleInput = document.forms["addBookForm"]["title"].value;
    let authorInput = document.forms["addBookForm"]["author"].value;
    let fotoInput = document.forms["addBookForm"]["fotoInput"].value;
// Cut the part of the string off after the dot, getting only the extension
    let fileExtension = fotoInput.split('.').pop().toLowerCase();

    if(titleInput === ""){
        alert("Vul aub een titel in.")
        return false;
    }
    if(authorInput === ""){
        alert("Vul aub een auteur in.")
        return false;
    }
    if(fotoInput === ""){
        alert("Voeg aub een foto toe.")
        return false;
    }
    if(!validateFoto(fileExtension)){
        return false;
    }
    // Get the category
    let categoryInput = document.forms["addBookForm"]["category"].value;
    // Create a new book
    const newBook = [titleInput, fotoInput, authorInput, categoryInput];
    // Using console logging to show the book got added
    console.log("Current size of the books array: " + books.length);
    books.push(newBook);
    alert("Boek toegevoegd!");
    console.log("New size of the books array: " + books.length);
    // return false so we dont reset the page
    return false;

}

// main function for validating the foto extension
function validateFoto(fileExtension){
    // Create an array of allowed extensions
    const allowedExtensions = ["jpg", "jpeg", "webp", "png"];
    // Validate if the extension is allowed or not
    let validExtension = false;
    allowedExtensions.forEach((extension) => {
        if(fileExtension === extension){
            validExtension = true;
        }
    });
    if(validExtension){
        return true;
    }
    else{
        alert("Dit is geen correct bestand. De volgende bestanden zijn mogelijk: " + allowedExtensions);
        return false;
    }
}
