let myLibrary = [];

class Book {
    constructor (bookName, author, category, page, readStatus){
        this.bookName = bookName;
        this.author = author;
        this.page = page;
        this.readStatus = readStatus;
        this.category = category;
    }
}



function addBookToLibrary(bookName, author, category, page, readStatus){
    let book = new Book(bookName, author, category, page, readStatus);
    myLibrary.push(book);
}

//Sidebar menu
document.querySelectorAll(".sideBarMenu").forEach((menu)=>{
    menu.addEventListener("click", (e)=>{
        e.target.nextElementSibling.classList.toggle('show');
    })
})

const addBookForm = document.forms.addBookForm;
addBookForm.onsubmit = function(event){
    let bookName = addBookForm.bookName.value;
    let author = addBookForm.author.value;
    let bookPage = addBookForm.bookPage.value;
    let readStatus = addBookForm.bookReadStatus.value;
    let category = "unknonwn" //todo: add category info to html
    let book = new Book(bookName, author, category, bookPage, readStatus);
    displayBook(book);
    addBookToLibrary(bookName, author, category, bookPage, readStatus);
    event.preventDefault();
}

function displayBook(book){
    const content = document.querySelector("#content");
    let bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.dataset.bookname = book.bookName;
    bookElement.innerHTML = `${book.bookName}<br> 
    ${book.author}<br>
    ${book.page}<br>
    <button class="removeBookButton" onclick="removeBook(this)">Remove</button>`;
    content.append(bookElement);
};

function displayAllBooks(){
    myLibrary.forEach((book)=>{
        displayBook(book);
    })
}

function removeBook(element){
    console.log(element.parentElement.dataset.bookname);
    element.parentElement.remove();
}
