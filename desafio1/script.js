
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
