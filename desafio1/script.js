
function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function () {
            console.log('printing')
        }
    }
    return book
}

const book1= createBook('Atomic', 'James', 306)
const book2= createBook('Tylor', 'Think', 400)

console.log(book1)
console.log(book2)














let leituraFavorita = 'Amada Imortal'
document.getElementsById('text').innerHTML = 'leitura'
//criando um objeto de forma organizada.
let bookTitle = 'Atomic Habits'
let bookAuthor = 'James CLear'
let bookPages = 306

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James CLear',
    bookPages: 306,
    bookChapters: {
        chap1:'Fundamentals',
        chap2: '1st law'
    },
    printBook: function () {
        console.log('printing')
    }
}

book.printBook()
function printBook() {
    console.log('Printing...')
}
