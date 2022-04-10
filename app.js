//Libraries

const mysql = require('promise-mysql');

const main = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'books_users',
    password: 'books123',
    database: 'books',
  });

  const books = await connection.query('SELECT * FROM books');
  console.log(books);

  connection.end();
};

main();
