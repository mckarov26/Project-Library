const openButton = document.querySelector("#open-btn");
const closeButton = document.querySelector("#close-btn");
const myDialog = document.querySelector("#myDialog")
const myForm = document.querySelector("#myForm")


const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");



const displayBooks = document.querySelector("#display-ctn");


openButton.addEventListener("click", () => {
    myDialog.showModal();
})

closeButton.addEventListener("click", () => {
    myDialog.close();
})





const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}. `; 

}
Book.pro

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", false);
addBookToLibrary("The Mckarov", "MMM. Karov", "1998", true);




myForm.addEventListener('submit', function(event) {
    event.preventDefault();


   displayTheBooks();

   const titleValue = title.value;
   const authorValue = author.value;
   const pagesValue = pages.value;
   const isReadValue = isRead.checked;


   addBookToLibrary(titleValue, authorValue, pagesValue, isReadValue);

   displayTheBooks();

   myForm.reset();
   
   


})


function displayTheBooks() {
    displayBooks.innerHTML = "";


    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.setAttribute("data-index", index);

        bookCard.innerHTML = `
            <h3><strong>Title</strong>:${book.title}</h3>
            <p><strong>Author</strong>:${book.author}</p>  
            <p><strong>Pages</strong>:${book.pages}</p> 
            <p><strong>Read</strong>:${book.read ? "Yes" : "No"}</p>

            <button class="remove-btn" data-index="${index}">x</button>

            
        
        `;

        displayBooks.appendChild(bookCard)
    });

    removeButtonListener();
}

function removeIndex(index) {
    myLibrary.splice(index, 1);
    displayTheBooks();
}

function removeButtonListener() {
    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");

            removeIndex(index);
        } )
    })
}