class Book {
    constructor(isbn,title,author,library){
        this.isbn = isbn;
        this.title = title;
        //this.author = author;
        var author = new Author(author);
        this.author = author.getAuthor();

        //this.library = library;
        var library = new Library(library);
        this.library = library.getLibrary();
    }

    getIsbn(){
        return this.isbn;
    }

    getTitle(){
        return this.title;
    }

    getAuthor(){
        return this.author;
    }

    getLibrary(){
        return this.library;
    }

    setNewTitle(newTitle){
        this.title = newTitle;
    }
}

class Author {
    constructor(author){
        this.author = author;
    }
    
    getAuthor(){
        return this.author;
    }
}

class Library {
    constructor(library){
        const listLibrary = ["Monterrey", "CDMX", "Chiapas"];
        if (listLibrary.includes(library))
            this.library = library;
        else
            this.library = 'Library Not Found';
    }

    getLibrary(){
        return this.library;
    }
}

// Add submit
var libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', saveBook);
console.log = 'Hello';

function saveBook(b){
    var isbn  = document.getElementById('isbn').value;
    var title  = document.getElementById('title').value;
    var author  = document.getElementById('author').value;
    var library;
    var chiapas = document.getElementById('chiapas');
    var cdmx = document.getElementById('cdmx');
    var monterrey = document.getElementById('monterrey');

    if (chiapas.checked) {
        library = chiapas.value;
    }
    else if (cdmx.checked) {
        library = cdmx.value;
    }
    else if (monterrey.checked) {
        library = monterrey.value;
    }

    if(title.length > 2 && author.length > 2)
    {
        bookOnLibrary = new Book(isbn,title,author,library);
        var tableBody = document.getElementById('tableBody');
        var uiString = `<tr>
                            <td>${bookOnLibrary.isbn}</td>
                            <td>${bookOnLibrary.title}</td>
                            <td>${bookOnLibrary.author}</td>
                            <td>${bookOnLibrary.library}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }else{
        document.getElementById('message').innerHTML = "La longitud debe del Titulo y el Author debe de ser mayor de 2 caracteres";
    }

    b.preventDefault();
}

