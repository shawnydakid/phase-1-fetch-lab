function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const url = 'https://anapioficeandfire.com/api/books';

  return fetch(url)
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the response as JSON
      return response.json();
    })
    .then(books => {
      // Do something with the books data
      console.log(books);
      return books; // Optional: return the books data
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Optional: re-throw the error for further handling
    });
}

function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  return fetch(url)
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the response as JSON
      return response.json();
    })
    .then(books => {
      // Call renderBooks function with the fetched books data
      renderBooks(books);
      return books; // Optional: return the books data
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Optional: re-throw the error for further handling
    });
}

function renderBooks(books) {
  // Assuming there's an element with id "bookList" where we want to render the book titles
  const bookList = document.getElementById('bookList');
  
  // Clear previous content
  bookList.innerHTML = '';

  // Loop through the books and render their titles
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; // Assuming the book title is stored in the "name" property
    bookList.appendChild(listItem);
  });
}

// Usage example:
fetchBooks()
  .then(books => {
    // Optional: Do something with the books data
    console.log('Books:', books);
  })
  .catch(error => {
    // Handle errors from fetchBooks() function
    console.error('Error fetching books:', error);
  });


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
