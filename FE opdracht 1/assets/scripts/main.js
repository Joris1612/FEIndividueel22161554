// select the containers used for DOM manipulation
const mainContent = document.getElementById('card-container');
let paginationContainer = document.getElementById('pagination-container');
// set the items per page, current page and amount of pages
let itemsPerPage = 5;
let currentPage = 1;
let amountOfPages;


// Determine the amount of pages needed based on the amount of books divided by the items per page
function determineAmountOfPages(allBooks) {
    amountOfPages = Math.ceil(allBooks.length / itemsPerPage);
}


//main function for displaying books
function displayBooks(allBooks) {
    // Select the amount of items per page, and take the current books shown based on these values
    itemsPerPage = Number(document.getElementById("count-selection").value);
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = (startIndex + itemsPerPage);
    let currentBooks = allBooks.slice(startIndex, endIndex);

    // Add eventlisteners to the DOM
    document.getElementById("sortBy").onchange = changeSortOrder;
    document.getElementById("count-selection").onchange = setAmount;

    // Clear existing content
    mainContent.innerHTML = '';

    // Display books for the current page
    currentBooks.forEach((book) => {
        // create a card
        const card = document.createElement('div');
        card.className = 'card';
        // add a title
        const title = document.createElement('h4');
        title.textContent = book.title;
        // add an image
        const image = document.createElement('img');
        image.src = book.img_url;
        image.alt = book.title + ' cover';
        image.className = 'card-image';

        //add labels using the createCardInfo method
        const authorInfo = createCardInfo('Auteur:', book.author);
        const categoryInfo = createCardInfo('Categorie:', book.category);

        // add above to the card
        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(authorInfo);
        card.appendChild(categoryInfo);

        // add card to the mainContent div
        mainContent.appendChild(card);
    });

    // main function for adding information to a book
    function createCardInfo(label, content) {
        // Create a card info group div
        const infoGroup = document.createElement('div');
        infoGroup.className = 'card-info-group';
        // Create a card info label
        const labelElement = document.createElement('p');
        labelElement.className = 'card-info';
        labelElement.textContent = label;
        // Add the content
        const contentElement = document.createElement('p');
        contentElement.textContent = content;
        // Add the elements to the card
        infoGroup.appendChild(labelElement);
        infoGroup.appendChild(contentElement);
        return infoGroup;
    }

    // Update pagination controls and change content based on pagination
    updatePagination(allBooks);

    // Change sort order
    function changeSortOrder() {
        // Select sort order input from user
        let chosenSort = document.getElementById("sortBy").value;
        // default value is pressed
        if (chosenSort === "") {
        } else {
            // Sort books alphabetically
            allBooks.sort();
            if (chosenSort === "a-z") {
                // User wants a-z, so we display them
                displayBooks(allBooks);
            } else {
                // User wants z-a, so we reverse it
                allBooks.reverse();
                displayBooks(allBooks);
            }
        }
    }


// set amount of items per page
    function setAmount() {
        itemsPerPage = document.getElementById('count-selection').value;
        displayBooks(allBooks);
    }

}

// Select the next page


// main function for adding pagination
function updatePagination(allBooks) {
    // Determine the amount of pages
    determineAmountOfPages(allBooks);
    // Add the page number to the title
    document.title = "Pagina " + currentPage;
    // reset the pagination
    paginationContainer.innerHTML = '';
    // Create a button to go to the previous page
    const previousButton = document.createElement('button');
    previousButton.className = 'button-primary';
    previousButton.textContent = "Vorige";
    paginationContainer.appendChild(previousButton);
    // create the amount of buttons necessary for pagination
    for (let i = 0; i < amountOfPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = "" + Number(i + 1);
        pageButton.className = 'button-primary';
        pageButton.onclick = function () {
            currentPage = i + 1;
            displayBooks(allBooks);
        }
        paginationContainer.appendChild(pageButton);
    }
    // Create a button to go to the next page
    const nextButton = document.createElement('button')
    nextButton.className = 'button-primary';
    nextButton.textContent = "Volgende";
    paginationContainer.appendChild(nextButton);
    // Disable redundant buttons if we have reached the first or last page
    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === amountOfPages;

    // Add eventListeners to the DOM items
    nextButton.onclick = nextPage;
    previousButton.onclick = previousPage;

    function nextPage() {
        currentPage += 1;
        displayBooks(allBooks)
    }

// Select the previous page
    function previousPage() {
        currentPage -= 1;
        displayBooks(allBooks)
    }
}


// main function to load books
export function loadBooks(allBooks) {
    let books = [];
    for(let i in allBooks)
        books.push(allBooks[i]);
    displayBooks(books);
}