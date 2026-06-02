let books = [];

// Add Book
const createBook = (req, res) => {
    const book = {
        id: Date.now(),
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publicationYear: req.body.publicationYear,
        availability: req.body.availability ?? true
    };

    books.push(book);

    res.status(201).json(book);
};

// Get All Books
const getBooks = (req, res) => {
    res.json(books);
};

// Update Book
const updateBook = (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    Object.assign(book, req.body);

    res.json(book);
};

// Delete Book
const deleteBook = (req, res) => {
    const id = Number(req.params.id);

    books = books.filter(b => b.id !== id);

    res.json({
        message: "Book deleted"
    });
};

// Search Books
const searchBooks = (req, res) => {
    const query = req.query.q?.toLowerCase() || "";

    const result = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );

    res.json(result);
};

module.exports = {
    createBook,
    getBooks,
    updateBook,
    deleteBook,
    searchBooks
};