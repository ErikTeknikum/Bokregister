//let myJson = '{"author":"author1", "title":"title1"}';
//let myObject = JSON.parse(myJson);
let books;
let title;
//let author1;
//let title1;

let Books = [];

function init(){
    books = document.getElementById("books");
    getBooks();    
}
window.onload = init;

async function getBooks(){
    let Books = await getBooksFetch();

    console.log(Books);

    for (element of Books){
        console.log(element);
        createTableRow(element);
    }
}

async function createTableRow(el){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = el.author;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = el.title;
    tr.appendChild(td);


    books.appendChild(tr);
    console.log(tr);
}

async function getBooksFetch(){
    const path = "https://localhost:7136/Book";

    let response = await fetch(path);
    console.log(response);

    let json = response.json();
    return json;
}


/*title = document.getElementById("title");

author1 = document.getElementById("author");
title1 = document.getElementById("title");

author.innerHTML = books.book[0].author;
title.innerHTML = books.book[0].title;

author1.innerHTML = books.book[1].author;
title1.innerHTML = books.book[1].title;

console.log(author);
console.log(title);*/