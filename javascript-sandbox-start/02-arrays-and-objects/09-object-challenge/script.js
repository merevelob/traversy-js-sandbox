const library = [
    {
        title: 'Lord of the flies',
        author: 'William Golding',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'María',
        author: 'Jorge Isaacs',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'El túnel',
        author: 'Ernesto Sábato',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
]

library.forEach(book => book.status.read = true);

console.log(library);

const { title: firstBook } = library[0];

const str = JSON.stringify(library);

console.log(str);
console.log(firstBook);