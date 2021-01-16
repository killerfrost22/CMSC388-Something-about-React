const ids = [1, 2, 3];
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', id: 1 },
  { title: '100 Years of Solitude', author: 'Gabriel Garcia Marquez', id: 2 },
  { title: 'Death of Ivan Ilych', author: 'Leo Tolstoy', id: 3 },
];

const authors = [
  { name: 'F. Scott Fitzgerald', bio: 'American' },
  { name: 'Gabriel Garcia Marquez', bio: 'Columbian' },
  { name: 'Leo Tolstoy', bio: 'Russian' },
];

function getBookById(id) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // using a settimeout to mimic a database
    setTimeout(() => {
      // find the post we want
      const book = books.find(book => book.id === id);
      if(book) {
        resolve(book); // send the book back
      } else {
        reject(Error('No Book Was Found!'));
      }
    }, 2000);
  });
}

function hydrateAuthor(book) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // find the author
    const authorDetails = authors.find(author => author.name === book.author);
    if(authorDetails) {
      // "hydrate" the post object with the author object
      book.author = authorDetails;
      resolve(book);
    } else {
      reject(Error(`Can not find the author for book ${book}`));
    }
  });
}

getBookById(1)
  .then(book => {
    return hydrateAuthor(book);
  })
  .then(book => {
    console.log(book);
  })
  .catch(err => {
    console.error(err);
  });

  for (let id of ids) {
    getBookById(id)
  .then(book => {
    return hydrateAuthor(book);
  })
  .then(book => {
    console.log(book);
  })
  .catch(err => {
    console.error(err);
  });
  }